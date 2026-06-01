# HallyuMatch AI
Discover Your Next K-Drama Obsession 🎬

A Machine Learning-based K-Drama Recommendation Web Application built using **Python, Flask, Pandas, and Scikit-learn** that helps users discover K-dramas similar to their favorite shows.

This project uses **content-based filtering**, **TF-IDF vectorization**, and **cosine similarity** to generate personalized drama recommendations based on genres, tags, and plot descriptions.

Designed for K-drama enthusiasts who want to discover new series intelligently through recommendation algorithms and interactive web experience.As a K-drama enthusiast, I wanted to explore how recommendation systems used by Netflix and streaming platforms work. This project combines NLP, content-based filtering, and web development to help users discover dramas aligned with their interests.

---

# 🚀 Project Overview

The K-Drama Recommendation System analyzes drama metadata and textual information to recommend similar K-dramas based on user preferences.

Users can:

* Search for a K-drama title
* Receive personalized recommendations
* Explore genres, ratings, episode counts, and drama details
* Discover dramas with similar themes and storylines

The recommendation engine leverages Natural Language Processing (NLP) techniques to understand content similarity between dramas.

---

# ✨ Features

✔ Search K-Dramas by Title
✔ Personalized Drama Recommendations
✔ Content-Based Filtering System
✔ TF-IDF Vectorization
✔ Cosine Similarity Recommendation Engine
✔ Responsive User Interface
✔ Genre & Synopsis-Based Matching
✔ Display of Drama Details & Ratings
✔ Flask-Based Web Application

---

# 🛠️ Tech Stack

| Technology          | Purpose                     |
| ------------------- | --------------------------- |
| Python              | Core Programming Language   |
| Flask               | Backend Web Framework       |
| Pandas              | Data Processing & Analysis  |
| Scikit-learn        | Machine Learning Algorithms |
| TF-IDF Vectorizer   | Text Feature Extraction     |
| Cosine Similarity   | Recommendation Engine       |
| HTML/CSS/JavaScript | Frontend Development        |

---

# 📂 Project Structure

```bash id="sqh29q"
kdrama_recommendation/
│
├── app.py
├── kdrama.ipynb
├── kdrama_list.csv
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash id="4w5m0u"
git clone https://github.com/TushtiSavarn/kdrama_recommendation.git
cd kdrama_recommendation
```

---

## 2️⃣ Install Dependencies

```bash id="xjj4ha"
pip install flask pandas scikit-learn
```

---

## 3️⃣ Run the Application

```bash id="5qbjlwm"
python app.py
```

Open your browser and visit:

```bash id="i4vmpk"
http://127.0.0.1:5000/
```

---

# 🧠 How the Recommendation System Works

## 🔹 Step 1: Data Processing

The dataset containing K-drama details such as genres, tags, synopses, ratings, and episode information is processed using Pandas.

---

## 🔹 Step 2: TF-IDF Vectorization

Textual information from drama descriptions and tags is converted into numerical vectors using TF-IDF Vectorization.

---

## 🔹 Step 3: Similarity Calculation

Cosine Similarity is used to calculate similarity scores between dramas.

---

## 🔹 Step 4: Recommendation Generation

The system returns dramas with the highest similarity scores based on the selected title.

---

# 📊 Machine Learning Concepts Used

* Content-Based Filtering
* Natural Language Processing (NLP)
* TF-IDF Vectorization
* Cosine Similarity
* Recommendation Systems

# 📚 Learning Outcomes

This project helped strengthen understanding of:

* Recommendation Systems
* NLP Fundamentals
* Machine Learning Workflows
* Data Preprocessing
* Flask Web Development
* Frontend & Backend Integration
* User Experience Design

---

# 🚀 Future Improvements

✔ Hybrid Recommendation System
✔ User Authentication & Favorites
✔ Mood-Based Recommendations
✔ Streaming Platform Integration
✔ Advanced NLP-Based Recommendations
✔ Deep Learning Recommendation Models
✔ Real-Time API Integration
✔ Dark Mode UI

---

# 🎯 Why This Project Matters

Recommendation systems are widely used in:

* Netflix
* Spotify
* YouTube
* E-commerce platforms

This project demonstrates practical implementation of machine learning concepts in entertainment-based recommendation systems while combining:

* AI/ML,
* web development,
* NLP,
* and user-centric design.

---

# 👩‍💻 Author

**Tushti Savarn**
MCA Student | AI/ML & Full-Stack Enthusiast

🔗 GitHub: https://github.com/TushtiSavarn
🔗 LinkedIn: https://www.linkedin.com/in/tushti-savarn/
🔗 Medium: https://medium.com/@tushtisavran

---

# ⭐ Support

If you enjoyed this project, consider giving it a ⭐ on GitHub!
