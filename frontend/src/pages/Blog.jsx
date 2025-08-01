import React from 'react';
import blog_1 from '../assets/blog_3.jpg';
import blog_2 from '../assets/blog_4.png';
import blog_3 from '../assets/blog_6.jpg';


const Blog = () => {


    const blogPosts = [
        {
            id: 1,
            title: 'The Fresh Harvest Blog',
            summary: 'Welcome to The Fresh Harvest Blog — your source for all things fresh, natural, and nourishing.',
            date: 'July 10, 2025',
            author: 'Jane Doe',
            image: blog_1
        },
        {
            id: 2,
            title: 'Nature’s Basket Insights',
            summary: 'Nature’s Basket Insights is your window into the vibrant world of natural produce.',
            date: 'July 15, 2025',
            author: 'John Smith',
            image: blog_2
        },
        {
            id: 3,
            title: 'Fruits, Veggies & Makhana Journal',
            summary: 'Welcome to the Fruits, Veggies & Makhana Journal — where freshness meets facts.',
            date: 'July 18, 2025',
            author: 'Alice Lee',
            image: blog_3
        },
    ];

    return (
        <div className="container-fluid py-3" style={{ backgroundColor: '#fdff72ff' }}>
            <div className="container my-5">
                <h2 className="mb-4 text-center">Latest Blog Posts</h2>
                <p className='text-center mb-4'>
                    your go-to destination for insights, tips, and stories that matter. Whether you're looking to explore the latest trends, deepen your industry knowledge, or simply get inspired, our articles are designed to spark curiosity and drive meaningful conversations. Updated regularly by our team and guest contributors, there’s always something new to discover.
                </p>
                <div className="row">
                    {blogPosts.map((post) => (
                        <div className="col-md-4 mb-4" key={post.id}>
                            <div className="card h-100">
                                <img src={post.image} className="card-img-top" alt={post.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text text-muted"><small>{post.date} by {post.author}</small></p>
                                    <p className="card-text">{post.summary}</p>
                                    <a href="/contact" className="mt-auto btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
