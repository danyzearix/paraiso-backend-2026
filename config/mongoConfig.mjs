import mongoose from "mongoose";

const connectDB = async () => {
    // URL de conexión a MongoDB Atlas
    const MONGODB_URI = 'mongodb+srv://sistemasparaiso:JUCcgTo287P+@cluster0.wthisou.mongodb.net/?compressors=zlib';
    try {
        await mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Conexión a MongoDB Atlas establecida correctamente');
      } catch (err) {
        console.error('Error al conectar a MongoDB Atlas:', err);
      }
}

export default connectDB;