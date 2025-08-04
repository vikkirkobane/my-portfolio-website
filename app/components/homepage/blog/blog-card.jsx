// app/components/homepage/blog/blog-card.jsx
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {
  // Safe defaults for missing data
  const coverImage = blog?.cover_image || '';
  const title = blog?.title || 'Untitled Blog Post';
  const description = blog?.description || 'No description available';
  const publishedAt = blog?.published_at || new Date().toISOString();
  const reactionsCount = blog?.public_reactions_count || 0;
  const commentsCount = blog?.comments_count || 0;
  const readingTime = blog?.reading_time_minutes || 0;

  return (
    <div 
      className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-full cursor-pointer overflow-hidden rounded-t-lg relative">
        {coverImage ? (
          <Image
            src={coverImage}
            fill
            alt={title}
            className="object-cover group-hover:scale-110 transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="bg-gray-700 w-full h-full flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>
      
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(publishedAt)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{reactionsCount}</span>
            </p>
            {commentsCount > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{commentsCount}</span>
              </p>
            )}
          </div>
        </div>
        
        <Link target="_blank" href={blog.url || "#"} className="block">
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500 line-clamp-2">
            {title}
          </p>
        </Link>
        
        <p className="mb-2 text-sm text-[#16f2b3]">
          {readingTime > 0 ? `${readingTime} Min Read` : 'Quick Read'}
        </p>
        
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;

