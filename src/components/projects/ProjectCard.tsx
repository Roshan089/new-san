import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'planned': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    'completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  };

  const formatDate = (date: string | null) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white dark:bg-navy-800 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {project.image_url && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>

        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          {project.start_date && (
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{formatDate(project.start_date)}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{formatDate(project.created_at)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;