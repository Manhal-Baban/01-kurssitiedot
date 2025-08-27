// component Header
function Header(props) {
  console.log(props);

  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
}

function Part(props) {
  console.log(props);
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  );
}

// component Content
function Content(props) {
  console.log(props);
  return (
    <>
      {/* <p>
        {props.name1} {props.exercises1}
      </p>

      <p>
        {props.name2} {props.exercises2}
      </p>

      <p>
        {props.name3} {props.exercise3}
      </p> */}

      <Part name={props.name1} exercises={props.exercises1} />
      <Part name={props.name2} exercises={props.exercises2} />
      <Part name={props.name3} exercises={props.exercises3} />
    </>
  );
}

// component Total
function Total(props) {
  console.log(props);
  return (
    <>
      <p> Number of exercises is {props.total}</p>
    </>
  );
}

function App() {
  //1st Date structure (phase 1)
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  //2nd Date structure (phase 2)
  const course_n = "Half Stack application development";

  const part1_n = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2_n = {
    name: "Using props to pass data of React",
    exercises: 7,
  };
  const part3_n = {
    name: "State of a component",
    exercises: 14,
  };

  //3rd Date structure (phase 3)
  const course_3 = "Half Stack application development";
  const parts_3 = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  //4th Date structure (phase 4)
  const course_4 = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <h1> whole app content</h1>
      <h2> {course}</h2>

      <p>
        {part1} {exercises1}
      </p>

      <p>
        {part2} {exercises2}
      </p>

      <p>
        {part3} {exercises3}
      </p>

      <p>
        Number of exercises {exercises1} + {exercises2} + {exercises3}
      </p>

      <hr></hr>

      <h1>content devited to 3 component header content and total</h1>

      <Header name={course} />
      <Content
        name1={part1}
        exercises1={exercises1}
        name2={part2}
        exercises2={exercises2}
        name3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <hr />
      <h1> With new data structure</h1>
      <Header name={course_n} />
      <Content
        name1={part1_n.name}
        exercises1={part1_n.exercises}
        name2={part2_n.name}
        exercises2={part2_n.exercises}
        name3={part3_n.name}
        exercises3={part3_n.exercises}
      />

      <Total
        total={part1_n.exercises + part2_n.exercises + part3_n.exercises}
      />
      <hr />
      <h1>Data Structure Phase 3 (Assignment 1.4)</h1>
      <Header name={course_3} />
      <Content
        name1={parts_3[0].name}
        exercises1={parts_3[0].exercises}
        name2={parts_3[1].name}
        exercises2={parts_3[1].exercises}
        name3={parts_3[2].name}
        exercises3={parts_3[2].exercises}
      />

      <Total
        total={
          parts_3[0].exercises + parts_3[1].exercises + parts_3[2].exercises
        }
      />

      <hr />
      <h1>Data Structure Phase 4 (Assignment1.5)</h1>

      <Header name={course_4.name} />

      <Content
        name1={course_4.parts[0].name}
        exercises1={course_4.parts[0].exercises}
        name2={course_4.parts[1].name}
        exercises2={course_4.parts[1].exercises}
        name3={course_4.parts[2].name}
        exercises3={course_4.parts[2].exercises}
      />

      <Total
        total={
          course_4.parts[0].exercises +
          course_4.parts[1].exercises +
          course_4.parts[2].exercises
        }
      />
    </>
  );
}

export default App;
