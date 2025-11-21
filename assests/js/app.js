const users = [
  {
    Id: 1,
    Name: "Aarav Sharma",
    Age: 21,
    DOB: "2004-03-15",
    Address: "Hyderabad",
    Gender: "Male",
    CGPA: 8.6,
    Course: "Computer Science",
  },
  {
    Id: 2,
    Name: "Neha Verma",
    Age: 22,
    DOB: "2003-07-09",
    Address: "Bangalore",
    Gender: "Female",
    CGPA: 9.1,
    Course: "Electronics",
  },
  {
    Id: 3,
    Name: "Rohan Gupta",
    Age: 20,
    DOB: "2005-01-22",
    Address: "Hyderabad",
    Gender: "Male",
    CGPA: 8.2,
    Course: "Mechanical Engineering",
  },
  {
    Id: 4,
    Name: "Isha Patil",
    Age: 23,
    DOB: "2002-11-30",
    Address: "Bangalore",
    Gender: "Female",
    CGPA: 9.4,
    Course: "Information Technology",
  },
  {
    Id: 5,
    Name: "Karan Mehta",
    Age: 21,
    DOB: "2004-05-18",
    Address: "Hyderabad",
    Gender: "Male",
    CGPA: 8.9,
    Course: "Civil Engineering",
  },
  {
    Id: 6,
    Name: "Simran Kaur",
    Age: 19,
    DOB: "2006-02-10",
    Address: "Bangalore",
    Gender: "Female",
    CGPA: 8.1,
    Course: "Biotechnology",
  },
  {
    Id: 7,
    Name: "Dev Mishra",
    Age: 22,
    DOB: "2003-08-20",
    Address: "Hyderabad",
    Gender: "Male",
    CGPA: 7.9,
    Course: "Aerospace Engineering",
  },
  {
    Id: 8,
    Name: "Tanvi Reddy",
    Age: 21,
    DOB: "2004-04-12",
    Address: "Bangalore",
    Gender: "Female",
    CGPA: 9.0,
    Course: "Computer Science",
  },
  {
    Id: 9,
    Name: "Yash Singh",
    Age: 23,
    DOB: "2002-12-08",
    Address: "Hyderabad",
    Gender: "Male",
    CGPA: 8.7,
    Course: "Electrical Engineering",
  },
  {
    Id: 10,
    Name: "Meera Nair",
    Age: 20,
    DOB: "2005-09-14",
    Address: "Bangalore",
    Gender: "Female",
    CGPA: 9.2,
    Course: "Architecture",
  },
  {
    Id: 11,
    Name: "Vikram Rao",
    Age: 21,
    DOB: "2004-06-25",
    Address: "Hyderabad",
    Gender: "Male",
    CGPA: 7.8,
    Course: "Information Technology",
  },
  {
    Id: 12,
    Name: "Pooja Desai",
    Age: 22,
    DOB: "2003-01-05",
    Address: "Bangalore",
    Gender: "Female",
    CGPA: 8.5,
    Course: "Computer Science",
  },
  {
    Id: 13,
    Name: "Aditya Menon",
    Age: 20,
    DOB: "2005-07-17",
    Address: "Hyderabad",
    Gender: "Male",
    CGPA: 8.3,
    Course: "Electronics",
  },
  {
    Id: 14,
    Name: "Sara Khan",
    Age: 23,
    DOB: "2002-02-28",
    Address: "Bangalore",
    Gender: "Female",
    CGPA: 9.5,
    Course: "Mechanical Engineering",
  },
  {
    Id: 15,
    Name: "Arjun Pillai",
    Age: 21,
    DOB: "2004-10-11",
    Address: "Hyderabad",
    Gender: "Male",
    CGPA: 8.0,
    Course: "Civil Engineering",
  },
  {
    Id: 16,
    Name: "Ritika Kapoor",
    Age: 19,
    DOB: "2006-03-09",
    Address: "Bangalore",
    Gender: "Female",
    CGPA: 9.3,
    Course: "Biotechnology",
  },
  {
    Id: 17,
    Name: "Hrithik Rao",
    Age: 22,
    DOB: "2003-12-21",
    Address: "Hyderabad",
    Gender: "Male",
    CGPA: 7.7,
    Course: "Aerospace Engineering",
  },
  {
    Id: 18,
    Name: "Nisha Kulkarni",
    Age: 20,
    DOB: "2005-05-02",
    Address: "Bangalore",
    Gender: "Female",
    CGPA: 8.8,
    Course: "Electrical Engineering",
  },
  {
    Id: 19,
    Name: "Siddharth Jain",
    Age: 21,
    DOB: "2004-09-30",
    Address: "Hyderabad",
    Gender: "Male",
    CGPA: 8.4,
    Course: "Computer Science",
  },
  {
    Id: 20,
    Name: "Ananya Bose",
    Age: 23,
    DOB: "2002-04-19",
    Address: "Bangalore",
    Gender: "Female",
    CGPA: 9.6,
    Course: "Information Technology",
  },
];

const filterByName = document.querySelector("#filterByName");
const filterByGender = document.querySelector("#filterByGender");
const filterByCgpa = document.querySelector("#filterByCgpa");

const useFilter = () => {
  let result = [...users];

  //filter the data by name
  const nameValue = filterByName.value.toLowerCase();
  if (nameValue) {
    result = result.filter((user) =>
      user.Name.toLowerCase().includes(nameValue)
    );
  }

  //filter by gender
  const genderValue = filterByGender.value;
  //   if (genderValue === "all") {
  //     result = result;
  //   } else if (genderValue == "male") {
  //     result = result.filter((user) => user.Gender.toLowerCase() === genderValue);
  //   } else {
  //     result = result.filter((user) => user.Gender.toLowerCase() === genderValue);
  //   }
  if (genderValue !== "all") {
    result = result.filter((user) => user.Gender.toLowerCase() === genderValue);
  }

  //filter the data by cgpa
  const cgpaValue = filterByCgpa.value;
  if (cgpaValue == "asc") {
    result.sort((a, b) => a.CGPA - b.CGPA);
  } else if (cgpaValue == "desc") {
    result.sort((a, b) => b.CGPA - a.CGPA);
  }
  displayData(result);
};

//display the user data in table
const displayData = (list) => {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";

  list.map((user, index) => {
    //we have to add the elements instead of assigning directly (#learning 1)
    tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.Name}</td>
            <td>${user.Age}</td>
            <td>${user.DOB}</td>
            <td>${user.Address}</td>
            <td>${user.Gender}</td>
            <td>${user.CGPA}</td>
            <td>${user.Course}</td>
        </tr>
    `;
  });
};

filterByName.addEventListener("input", useFilter);
filterByGender.addEventListener("change", useFilter);
filterByCgpa.addEventListener("change", useFilter);
displayData(users);
