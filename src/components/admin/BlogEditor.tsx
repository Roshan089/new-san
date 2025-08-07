import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import Button from '../shared/Button';

interface BlogFormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
}

const BlogEditor: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    published: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      loadBlog();
    }
  }, [id]);

  const loadBlog = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (data) {
        setFormData(data);
      }
    } catch (err) {
      setError('Failed to load blog');
      console.error(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTogglePublished = () => {
    setFormData((prev) => ({ ...prev, published: !prev.published }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = id
        ? await supabase
            .from('blogs')
            .update(formData)
            .eq('id', id)
        : await supabase
            .from('blogs')
            .insert([formData]);

      if (error) throw error;
      navigate('/admin/blogs');
    } catch (err) {
      setError('Failed to save blog');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading font-bold text-navy-900 dark:text-white">
          {id ? 'Edit Blog' : 'Create New Blog'}
        </h2>
        <div className="flex space-x-2">
          <Button
            onClick={() => navigate('/admin/blogs')}
            variant="outline"
            className="flex items-center"
          >
            <X size={16} className="mr-2" />
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center"
          >
            <Save size={16} className="mr-2" />
            Save
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-md mb-6 border border-red-200 dark:border-red-800">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={10}
            className="w-full px-4 py-2 border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="published"
            checked={formData.published}
            onChange={handleTogglePublished}
            className="h-4 w-4 text-saffron-500 focus:ring-saffron-500 border-gray-300 dark:border-silver-600 rounded"
          />
          <label htmlFor="published" className="text-sm text-navy-700 dark:text-white">
            Published
          </label>
        </div>
      </form>
    </div>
  );
};

export default BlogEditor;