interface CourseGoal {
  name: string;
  time: string;
  completedUntil: Date;
  description: string;
}

function createCourseGoal(
  name: string,
  time: string,
  completedUntil: Date,
  description: string
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.name = name;
  courseGoal.description = description;
  courseGoal.completedUntil = completedUntil;
  courseGoal.time = time;

  return courseGoal as CourseGoal;
}

const rdonlyNames: Readonly<string[]> = ["Max", "Ovi"];
