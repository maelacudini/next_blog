import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        name: 'Roma',
        description: 'Rome, the eternal city, casts a mesmerizing spell on all who wander its ancient streets. Steeped in history and adorned with architectural marvels, Rome stands as a testament to the grandeur of the Roman Empire. As you stroll through its cobblestone alleys, you\'ll encounter iconic landmarks like the Colosseum, where gladiators once clashed in epic battles, and the Pantheon, a majestic temple dedicated to the Roman gods. Rome is a city that effortlessly blends the old and the new, offering a vibrant atmosphere, delectable cuisine, and a rich cultural heritage.',
        image: 'https://images.unsplash.com/photo-1542820229-081e0c12af0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        date: new Date().toLocaleDateString()
    },
    {
        id: 2,
        name: 'Vienna',
        description: 'Vienna, the capital of Austria, is a city of imperial splendor and artistic brilliance. Known for its stunning architecture, classical music, and rich cultural heritage, Vienna offers a delightful blend of history and contemporary charm. Explore the grandeur of Schönbrunn Palace, immerse yourself in the melodies of Mozart and Strauss at the Vienna State Opera, and wander through the charming streets of the UNESCO-listed historic center. Vienna is also renowned for its coffeehouse culture, where you can savor a cup of Viennese coffee and indulge in delicious pastries. With its elegant charm and refined ambiance, Vienna is a city that captivates the hearts of its visitors.',
        image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmllbm5hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        date: new Date().toLocaleDateString()
    },
    {
        id: 3,
        name: 'Amsterdam',
        description: 'Amsterdam, the capital of the Netherlands, is a city of enchanting beauty and vibrant energy. With its iconic canal network, charming narrow houses, and world-class museums, Amsterdam offers a captivating experience at every turn. Take a leisurely boat ride along the picturesque canals, visit the famous Anne Frank House, and immerse yourself in the masterpieces of Van Gogh at the Van Gogh Museum. Amsterdam is also known for its progressive attitude, cultural diversity, and thriving arts scene. Explore the trendy neighborhoods, indulge in delicious Dutch cuisine, and soak in the laid-back atmosphere of this remarkable city.',
        image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW1zdGVyZGFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        date: new Date().toLocaleDateString()
    },
    {
        id: 4,
        name: 'London',
        description: 'London, the bustling capital of England, is a city that seamlessly blends tradition with modernity. From its iconic landmarks like the Tower of London and Buckingham Palace to its vibrant cultural scene and diverse culinary offerings, London has something for everyone. Explore the British Museum and discover artifacts from around the world, take a leisurely stroll through Hyde Park, and admire the majestic beauty of St. Paul\'s Cathedral. London is also a melting pot of cultures, with vibrant neighborhoods like Camden and Notting Hill offering a glimpse into its multicultural fabric. Immerse yourself in the rich history, vibrant energy, and global allure of this captivating city.',
        image: 'https://images.unsplash.com/photo-1517394834181-95ed159986c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        date: new Date().toLocaleDateString()
    }
];

export const postslice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        addPost: (state, action) => {
            const post = {
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                image: action.payload.image,
                date: action.payload.date
            };
            state.push(post);
        },
        deletePost: (state, action) => {
            const postId = action.payload.id;
            return state.filter((post) => post.id !== postId);
        }  
    }
});

export const { addPost, deletePost } = postslice.actions;

export default postslice.reducer;

