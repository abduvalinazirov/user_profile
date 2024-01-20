import { HttpResponse, http } from "msw";

let users = [
  {
    id: 1,
    name: "Abduvali Nazirov",
    email: "nazirov@gmail.com",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui voluptate fugit consequatur est. Voluptas sequi culpa enim. Vero, placeat!",
    image: "/images/person.jpg",
  },
  {
    id: 2,
    name: "Kamron Egamberdiyev",
    email: "egamberdiyev@gmail.com",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro facilis repellat ab voluptatibus. Voluptates veritatis iste deleniti?",
    image: "/images/person2.jpg",
  },
  {
    id: 3,
    name: "Alijon Toshpo'latov",
    email: "alijon@gmail.com",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae repellendus illum unde iusto modi harum mollitia.",
    image: "/images/person3.jpg",
  },
];

export const handlers = [
  http.get("/api/users", (resolver) => {
    return HttpResponse.json(users);
  }),

  http.get("/api/user/:id", (resolver) => {
    let user = users.find((item) => item.id === +resolver.params.id);

    return user ? HttpResponse.json(user) : new HttpResponse(null, { status: 404 });
  }),

  http.put("/api/user/:id", async (resolver) => {
    const requestBody = await resolver.request.json();
    let userId = resolver.params.id;
    let userIndex = users.findIndex((item) => item.id === +userId);
    users[userIndex].name = requestBody.name;
    users[userIndex].email = requestBody.email;
    users[userIndex].bio = requestBody.bio;

    return HttpResponse.json(users[userIndex]);
  }),
];
