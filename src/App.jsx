import "./App.css";

const WelcomeMessage = (props) => {
  return <h1>Welcome, {props.name}!</h1>;
};

const BookDetails = (bookData) => {
  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {bookData.title}</p>
      <p>Author: {bookData.author}</p>
      <p>Genre: {bookData.genre}</p>
    </div>
  );
};

const ArticleInformation = (articleData) => {
  return (
    <div>
      <h2>Article Information</h2>
      <p>Title: {articleData.title}</p>
      <p>Author: {articleData.author}</p>
      <p>Published Date: {articleData.publishedDate}</p>
    </div>
  );
};

const ProductDetails = (productData) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {productData.name}</p>
      <p>Brand: {productData.brand}</p>
      <p>Price: ${productData.price}</p>
    </div>
  );
};

const EventDetails = (eventData) => {
  return (
    <div>
      <h2>Event Details</h2>
      <p>Title: {eventData.title}</p>
      <p>Location: {eventData.location}</p>
      <p>Date: {eventData.date}</p>
    </div>
  );
};

const UserProfile = (props) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {props.name}</p>
      <img src={props.avatarUrl} alt={props.alt} />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <WelcomeMessage name="Emily" />

      <BookDetails
        title="To Kill a Mockingbird"
        author="Harper Lee"
        genre="Classic"
      />

      <ArticleInformation
        title="The Power of Habit"
        author="Charles Duhigg"
        publishedDate="March 1, 2024"
      />

      <ProductDetails name="Smartphone" brand="Samsung" price={799.99} />

      <EventDetails
        title="Tech Conference 2024"
        location="San Francisco"
        date="April 15, 2024"
      />

      <UserProfile
        name="Chris"
        avatarUrl="https://via.placeholder.com/150"
        alt="placeholder"
      />
    </div>
  );
}
