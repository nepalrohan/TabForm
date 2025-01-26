import { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

export default function TabForm() {
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: ["coding", "music"],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || !data.name > 2) {
          err.name = "Name is not valid";
        }

        if (!data.age || !data.age.length > 18) {
          err.age = "Age is not valid, must be above 18";
        }

        if (!data.email || !data.email.length > 2) {
          err.email = "Email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (!interests.length > 1) {
          err.interests = "Select atleast one interest";
        }
        setError(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveComponent = tabs[activeTab].component;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (tabs[active].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <div className="tab-container">
        {tabs.map((tab, index) => {
          return (
            <div
              className="tab-header"
              onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
              key={index}
            >
              {tab.name}
            </div>
          );
        })}
      </div>

      <div className="body-container">
        <ActiveComponent
          data={data}
          handleChange={handleChange}
          setData={setData}
          errors={errors}
        />
      </div>
      <div>{activeTab > 0 && <button onClick={handlePrev}>Prev</button>}</div>
      <div>
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
      <div>
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}
