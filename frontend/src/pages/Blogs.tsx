import {BlogCard } from '../components/BlogCard'
import {Appbar } from '../components/Appbar'
import {useBlogs} from '../hooks'
import { BlogSkeleton } from '../components/BlogSkeleton';

export const Blogs = () =>{
    const {loading,blogs} = useBlogs();

    if(loading){
            return<div> <Appbar></Appbar>
            <div className='flex justify-center'>
                
                <div>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                </div>
            </div>
            </div>
    }


    return <div>
        <Appbar></Appbar>
        <div className='flex justify-center'>
    <div>
        {blogs.map(blog=><BlogCard
        id={blog.id}
        authorName={blog.author.name|| "Anonymous"}
        title={blog.title}
        content={blog.content}
        publishedDate={"2nd Oct"}
        ></BlogCard>)}
        
       
    </div>
    </div>
    </div>
}