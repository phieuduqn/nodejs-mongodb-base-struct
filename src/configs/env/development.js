export default {
  db: process.env.MONGO_URL || "mongodb://localhost/influencer_db",
  url: process.env.BASE_URI || "http://localhost:5001",
  media_url:
    process.env.AWS_BUCKET_IMAGE_BASE_URL ||
    "https://media-dev-bucket.s3.ap-south-1.amazonaws.com",
  dbOptions: (options) => {
    return {
      autoIndex: options.autoIndex,
      useNewUrlParser: true,
      keepAlive: true,
      connectTimeoutMS: 300000,
      socketTimeoutMS: 300000,
    };
  },
  masterIP: process.env.MASTER_IP,
  // Secret for token
  secret: process.env.SECRET,
  email: {
    id: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  superAdmin: {
    username: process.env.SUPER_ADMIN_USERNAME,
    password: process.env.SUPER_ADMIN_PASSWORD,
    email: process.env.SUPER_ADMIN_EMAIL,
    fullName: process.env.SUPER_ADMIN_FULL_NAME,
  },
  redisDB: {
    host: process.env.REDIS_URL || "localhost",
    port: process.env.REDIS_PORT || 6379,
    isClusterMode: process.env.REDIS_CLUSTER,
  },
};
