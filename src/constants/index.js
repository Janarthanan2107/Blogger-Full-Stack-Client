const blogsData = [
    {
        "id": 1,
        "title": "Introduction to Blogging",
        "content": "This is a sample blog post introducing the basics of blogging...",
        "author": "John Doe",
        "tags": ["Blogging", "Writing", "Web"],
        "datePublished": "2023-03-01",
        "comments": [
            { "text": "Great start!", "author": "Jane Smith", "date": "2023-03-02" },
            { "text": "Great start!", "author": "Jane Smith", "date": "2023-03-02" },
        ],
        "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1703168165882/d460aece-9364-46ba-9ae7-66e927295c66.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "likes": 15
    },
    {
        "id": 2,
        "title": "The Benefits of Outdoor Exercise",
        "content": "Exploring the advantages of incorporating outdoor activities into your exercise routine...",
        "author": "Alice Johnson",
        "tags": ["Fitness", "Exercise", "Outdoors"],
        "datePublished": "2023-03-05",
        "comments": [],
        "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1703947010358/e47c547e-c86f-4c2b-8dd1-42004ed10b86.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "likes": 20
    },
    {
        "id": 3,
        "title": "Delicious and Healthy Smoothie Recipes",
        "content": "Discover some tasty and nutritious smoothie recipes to kickstart your day...",
        "author": "Emma Brown",
        "tags": ["Recipes", "Smoothies", "Healthy Living"],
        "datePublished": "2023-03-10",
        "comments": [
            { "text": "I can't wait to try these recipes!", "author": "Mark Wilson", "date": "2023-03-11" },
            { "text": "I can't wait to try these recipes!", "author": "Mark Wilson", "date": "2023-03-11" },
            { "text": "I can't wait to try these recipes!", "author": "Mark Wilson", "date": "2023-03-11" },
            { "text": "I can't wait to try these recipes!", "author": "Mark Wilson", "date": "2023-03-11" },
            { "text": "I can't wait to try these recipes!", "author": "Mark Wilson", "date": "2023-03-11" },
            { "text": "I can't wait to try these recipes!", "author": "Mark Wilson", "date": "2023-03-11" },
        ],
        "image": "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/fzXVmIUsEbM/upload/dac45bf5681e23daa06da4241acf99be.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "likes": 25
    },
    {
        "id": 4,
        "title": "Exploring Nature: A Photographic Journey",
        "content": "Immerse yourself in the beauty of nature through stunning photographs...",
        "author": "Sophie Turner",
        "tags": ["Nature", "Photography", "Travel"],
        "datePublished": "2023-03-15",
        "comments": [
            { "text": "Absolutely breathtaking!", "author": "Chris Johnson", "date": "2023-03-16" }
        ],
        "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1703747972205/f477415c-88f8-4478-8ea9-085399652bc8.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "likes": 30
    },
    {
        "id": 5,
        "title": "Mindful Living: Embracing the Present Moment",
        "content": "Learn how to incorporate mindfulness into your daily life for a more fulfilling existence...",
        "author": "Olivia Miller",
        "tags": ["Mindfulness", "Wellness", "Lifestyle"],
        "datePublished": "2023-03-20",
        "comments": [],
        "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1703675613571/0508b9ac-b6f8-4525-9ba7-5aac13ff6f3b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "likes": 18
    },
    {
        "id": 6,
        "title": "Tech Trends: The Rise of Artificial Intelligence",
        "content": "Explore the latest trends in artificial intelligence and its impact on various industries...",
        "author": "Ryan Carter",
        "tags": ["Artificial Intelligence", "Technology", "Innovation"],
        "datePublished": "2023-03-25",
        "comments": [
            { "text": "Fascinating read!", "author": "Ella Davis", "date": "2023-03-26" },
            { "text": "Fascinating read!", "author": "Ella Davis", "date": "2023-03-26" },
            { "text": "Fascinating read!", "author": "Ella Davis", "date": "2023-03-26" },
        ],
        "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1701891902332/f9f9bdbe-585d-444d-b551-c2c4fed94a57.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "likes": 22
    },
    {
        "id": 7,
        "title": "The Joy of Reading: Must-Read Books for Every Bibliophile",
        "content": "Discover a curated list of must-read books that every book lover should have on their shelf...",
        "author": "Matthew White",
        "tags": ["Books", "Reading", "Literature"],
        "datePublished": "2023-03-30",
        "comments": [],
        "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1703224646916/66bf3d19-2b30-453c-8766-2f4bb4c619b1.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "likes": 28
    },
    {
        "id": 8,
        "title": "DIY Home Decor Projects on a Budget",
        "content": "Transform your living space with these budget-friendly DIY home decor ideas...",
        "author": "Sophie Adams",
        "tags": ["DIY", "Home Decor", "Crafts"],
        "datePublished": "2023-04-02",
        "comments": [
            { "text": "Can't wait to try these out!", "author": "James Parker", "date": "2023-04-03" },
            { "text": "Can't wait to try these out!", "author": "James Parker", "date": "2023-04-03" },
        ],
        "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1703170021005/f8cc64b1-2ffb-4dc1-a40d-7024f6ab7a94.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "likes": 26
    },
    {
        "id": 9,
        "title": "Exploring Historical Landmarks: A Journey Through Time",
        "content": "Take a virtual tour through some of the world's most iconic historical landmarks...",
        "author": "Natalie Clark",
        "tags": ["History", "Travel", "Culture"],
        "datePublished": "2023-04-05",
        "comments": [
            { "text": "Amazing virtual journey!", "author": "Robert Turner", "date": "2023-04-06" },
            { "text": "Amazing virtual journey!", "author": "Robert Turner", "date": "2023-04-06" },
            { "text": "Amazing virtual journey!", "author": "Robert Turner", "date": "2023-04-06" },
        ],
        "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1703168165882/d460aece-9364-46ba-9ae7-66e927295c66.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "likes": 32
    },
    {
        "id": 10,
        "title": "Healthy Habits for Productivity: A Guide for Remote Workers",
        "content": "Learn how to maintain a healthy work-life balance and stay productive while working remotely...",
        "author": "Sarah Johnson",
        "tags": ["Productivity", "Remote Work", "Wellness"],
        "datePublished": "2023-04-10",
        "comments": [
            { "text": "Very helpful tips!", "author": "Daniel Evans", "date": "2023-04-11" },
            { "text": "Very helpful tips!", "author": "Daniel Evans", "date": "2023-04-11" },
            { "text": "Very helpful tips!", "author": "Daniel Evans", "date": "2023-04-11" },
            { "text": "Very helpful tips!", "author": "Daniel Evans", "date": "2023-04-11" },
        ],
        "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1703143418725/8840ef3a-d082-4d33-a45c-08b3afa2f4d2.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        "likes": 24
    }
]

export { blogsData }