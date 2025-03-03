const ProjectPage = async ({
  params,
}: {
  params: Promise<{ blog: string }>;
}) => {
  const { blog } = await params;

  console.log(await params);
  console.log(blog);

  // const res = await fetch(`http://localhost:5000/blogs/${blog}`);

  // const blogs = await res.json();

  return <div className="my-10">{/* <BlogDetailsCard blog={blogs} /> */}</div>;
};

export default ProjectPage;
