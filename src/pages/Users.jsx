import { useState, useRef } from 'react';

function Home() {

  // Task 2: Background color using useState
  const [bgColor, setBgColor] = useState('#f4f6f9');

  const changeBackground = () => {
    setBgColor(
      bgColor === '#f4f6f9' ? '#dbeafe' : '#f4f6f9'
    );
  };


  // Task 3: useRef practice
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState('');

  const showInputValue = () => {
    setInputValue(inputRef.current.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };


  // Task 4: Form handling
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      age: ''
    });

    setSubmittedData(null);
  };


  // Task 5: Object state
  const [user, setUser] = useState({
    name: 'Ashraful',
    email: 'ashraful@example.com'
  });

  const updateName = () => {
    setUser({
      ...user,
      name: 'New User'
    });
  };


  // Task 5: Array state
  const [skills, setSkills] = useState([
    'HTML',
    'CSS',
    'JavaScript'
  ]);

  const addSkill = () => {
    setSkills([...skills, 'React']);
  };


  return (
    <div className="home-page" style={{ backgroundColor: bgColor }}>

      <section className="welcome">
        <h1>Welcome to User Directory</h1>
        <p>Learn React Hooks, Forms, API and Routing.</p>

        <button onClick={changeBackground}>
          Change Background
        </button>
      </section>


      {/* Task 3: useRef */}

      <section className="card">
        <h2>useRef Practice</h2>

        <input
          type="text"
          placeholder="Enter something..."
          ref={inputRef}
        />

        <div className="button-group">
          <button onClick={showInputValue}>
            Show Value
          </button>

          <button onClick={focusInput}>
            Focus Input
          </button>
        </div>

        {inputValue && (
          <p>Input Value: {inputValue}</p>
        )}
      </section>


      {/* Task 4: Form Handling */}

      <section className="card">
        <h2>User Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <div className="button-group">
            <button type="submit">
              Submit
            </button>

            <button type="button" onClick={resetForm}>
              Reset
            </button>
          </div>

        </form>

        {submittedData && (
          <div className="result">
            <h3>Submitted Information</h3>

            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Age: {submittedData.age}</p>
          </div>
        )}
      </section>


      {/* Task 5: Object State */}

      <section className="card">
        <h2>Object State</h2>

        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>

        <button onClick={updateName}>
          Update Name
        </button>
      </section>


      {/* Task 5: Array State */}

      <section className="card">
        <h2>Array State</h2>

        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}

        <button onClick={addSkill}>
          Add React Skill
        </button>
      </section>

    </div>
  );
}

export default Home;