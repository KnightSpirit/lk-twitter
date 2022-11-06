const users = [
  { username: "jason", firstname: "Jason", password: "123456" },
  { username: "george", firstname: "George", password: "123456" },
  { username: "charles", firstname: "Charles", password: "123456" },
  { username: "michelle", firstname: "Michelle", password: "123456" },
  { username: "frank", firstname: "Frank", password: "123456" },
  { username: "barbara", firstname: "Barbara", password: "123456" },
  { username: "helen", firstname: "Helen", password: "123456" },
  { username: "james", firstname: "James", password: "123456" },
  { username: "jessica", firstname: "Jessica", password: "123456" },
  { username: "amy", firstname: "Amy", password: "123456" },
  { username: "linda", firstname: "Linda", password: "123456" },
  { username: "mark", firstname: "Mark", password: "123456" },
  { username: "nancy", firstname: "Nancy", password: "123456" },
  { username: "gary", firstname: "Gary", password: "123456" },
  { username: "charles", firstname: "Charles", password: "123456" },
  { username: "donna", firstname: "Donna", password: "123456" },
  { username: "amy", firstname: "Amy", password: "123456" },
  { username: "michael", firstname: "Michael", password: "123456" },
  { username: "melissa", firstname: "Melissa", password: "123456" },
  { username: "scott", firstname: "Scott", password: "123456" },
  { username: "steven", firstname: "Steven", password: "123456" },
  { username: "deborah", firstname: "Deborah", password: "123456" },
  { username: "carol", firstname: "Carol", password: "123456" },
  { username: "thomas", firstname: "Thomas", password: "123456" },
  { username: "daniel", firstname: "Daniel", password: "123456" },
  { username: "deborah", firstname: "Deborah", password: "123456" },
  { username: "george", firstname: "George", password: "123456" },
  { username: "john", firstname: "John", password: "123456" },
  { username: "anthony", firstname: "Anthony", password: "123456" },
  { username: "william", firstname: "William", password: "123456" },
  { username: "sarah", firstname: "Sarah", password: "123456" },
  { username: "scott", firstname: "Scott", password: "123456" },
  { username: "frank", firstname: "Frank", password: "123456" },
  { username: "larry", firstname: "Larry", password: "123456" },
  { username: "timothy", firstname: "Timothy", password: "123456" },
  { username: "joseph", firstname: "Joseph", password: "123456" },
  { username: "eric", firstname: "Eric", password: "123456" },
  { username: "christopher", firstname: "Christopher", password: "123456" },
  { username: "frank", firstname: "Frank", password: "123456" },
  { username: "sharon", firstname: "Sharon", password: "123456" },
  { username: "steven", firstname: "Steven", password: "123456" },
  { username: "sharon", firstname: "Sharon", password: "123456" },
  { username: "melissa", firstname: "Melissa", password: "123456" },
  { username: "larry", firstname: "Larry", password: "123456" },
  { username: "michael", firstname: "Michael", password: "123456" },
  { username: "mary", firstname: "Mary", password: "123456" },
  { username: "christopher", firstname: "Christopher", password: "123456" },
  { username: "barbara", firstname: "Barbara", password: "123456" },
  { username: "steven", firstname: "Steven", password: "123456" },
  { username: "brian", firstname: "Brian", password: "123456" },
  { username: "daniel", firstname: "Daniel", password: "123456" },
  { username: "carol", firstname: "Carol", password: "123456" },
  { username: "shirley", firstname: "Shirley", password: "123456" },
  { username: "brian", firstname: "Brian", password: "123456" },
  { username: "laura", firstname: "Laura", password: "123456" },
  { username: "carol", firstname: "Carol", password: "123456" },
  { username: "sarah", firstname: "Sarah", password: "123456" },
  { username: "george", firstname: "George", password: "123456" },
  { username: "carol", firstname: "Carol", password: "123456" },
  { username: "frank", firstname: "Frank", password: "123456" },
  { username: "margaret", firstname: "Margaret", password: "123456" },
  { username: "shirley", firstname: "Shirley", password: "123456" },
  { username: "amy", firstname: "Amy", password: "123456" },
  { username: "michelle", firstname: "Michelle", password: "123456" },
  { username: "david", firstname: "David", password: "123456" },
  { username: "david", firstname: "David", password: "123456" },
  { username: "steven", firstname: "Steven", password: "123456" },
  { username: "linda", firstname: "Linda", password: "123456" },
  { username: "patricia", firstname: "Patricia", password: "123456" },
  { username: "james", firstname: "James", password: "123456" },
  { username: "john", firstname: "John", password: "123456" },
  { username: "jason", firstname: "Jason", password: "123456" },
  { username: "gary", firstname: "Gary", password: "123456" },
  { username: "eric", firstname: "Eric", password: "123456" },
  { username: "karen", firstname: "Karen", password: "123456" },
  { username: "margaret", firstname: "Margaret", password: "123456" },
  { username: "sarah", firstname: "Sarah", password: "123456" },
  { username: "nancy", firstname: "Nancy", password: "123456" },
  { username: "betty", firstname: "Betty", password: "123456" },
  { username: "patricia", firstname: "Patricia", password: "123456" },
  { username: "shirley", firstname: "Shirley", password: "123456" },
  { username: "laura", firstname: "Laura", password: "123456" },
  { username: "barbara", firstname: "Barbara", password: "123456" },
  { username: "linda", firstname: "Linda", password: "123456" },
  { username: "anthony", firstname: "Anthony", password: "123456" },
  { username: "scott", firstname: "Scott", password: "123456" },
  { username: "dorothy", firstname: "Dorothy", password: "123456" },
  { username: "michelle", firstname: "Michelle", password: "123456" },
  { username: "brian", firstname: "Brian", password: "123456" },
  { username: "ruth", firstname: "Ruth", password: "123456" },
  { username: "jason", firstname: "Jason", password: "123456" },
  { username: "linda", firstname: "Linda", password: "123456" },
  { username: "paul", firstname: "Paul", password: "123456" },
  { username: "kevin", firstname: "Kevin", password: "123456" },
  { username: "shirley", firstname: "Shirley", password: "123456" },
  { username: "susan", firstname: "Susan", password: "123456" },
  { username: "david", firstname: "David", password: "123456" },
  { username: "betty", firstname: "Betty", password: "123456" },
  { username: "paul", firstname: "Paul", password: "123456" },
  { username: "jose", firstname: "Jose", password: "123456" },
  { username: "patricia", firstname: "Patricia", password: "123456" },
];

export function hasUser(username: string, password?: string) {
  const user = users.find((u) => u.username === username);
  if (user) {
    if (password === user.password) {
      return {
        error: "",
      };
    } else {
      return {
        error: "password is wrong",
      };
    }
  }

  return {
    error: "user is not exist",
  };
}

export function createUser(userInfo: LikeTwritter.User) {
  const user = users.find((u) => u.username === userInfo.username);
  if (user) {
    return {
      error: "user is exist",
    };
  }

  users.push(userInfo);
  return {
    error: "",
  };
}

export function findUserByUserId(userId: string) {
  return users.find((u) => u.username === userId) || undefined;
}
