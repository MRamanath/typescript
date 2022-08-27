https://www.typescriptlang.org/docs/handbook/utility-types.html

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }
  
  function createCourseGoal(course: CourseGoal): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}; // Partial utility generic 
    courseGoal.title = course.title;
    courseGoal.description = course.description;
    courseGoal.completeUntil = course.completeUntil;
  
    return courseGoal as CourseGoal;
  }
  
  const course = createCourseGoal({
    title: "Course 1",
    description: "Course description",
    completeUntil: new Date()
  })
  
  console.log(course);
  
  
  ////////////////////////////////
  
  const names: Readonly<string[]> = ['max', 'robert', 'bob', 'john']; // Readonly utility generic
  // names.push('anna');
  
  type cObj = {
    name: string,
    age: number,
    location: string
  }
  
  const obj: Readonly<cObj> = {
    name: 'a',
    age: 23,
    location: 'Sydney'
  } // Readonly utility generic
  
  // obj.name = 'John';
