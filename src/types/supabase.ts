export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          author_id: string | null
          published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt?: string | null
          author_id?: string | null
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string | null
          author_id?: string | null
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          slug: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          created_at?: string
        }
      }
      blog_tags: {
        Row: {
          blog_id: string
          tag_id: string
          created_at: string
        }
        Insert: {
          blog_id: string
          tag_id: string
          created_at?: string
        }
        Update: {
          blog_id?: string
          tag_id?: string
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          role: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          role?: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}