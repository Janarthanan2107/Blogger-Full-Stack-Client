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
        "image": "blogging_intro.jpg",
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
        "image": "outdoor_exercise.jpg",
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
        "image": "smoothie_recipes.jpg",
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
        "image": "nature_photography.jpg",
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
        "image": "mindful_living.jpg",
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
        "image": "ai_trends.jpg",
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
        "image": "must_read_books.jpg",
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
        "image": "diy_decor.jpg",
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
        "image": "historical_landmarks.jpg",
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
        "image": "remote_work.jpg",
        "likes": 24
    }
]

export { blogsData }