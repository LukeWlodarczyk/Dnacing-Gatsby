exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      dance: { instructors },
    },
  } = await graphql(`
    {
      dance {
        instructors(stage: PUBLISHED) {
          name
          slug
        }
      }
    }
  `);

  instructors.forEach(({  slug }) =>
    createPage({
      path: `/instructors/${slug}`,
      component: require.resolve(`./src/templates/Instructor.jsx`),
      context: {
        slug,
      },
    })
  );

  const {
    data: {
      dance: { danceStyles },
    },
  } = await graphql(`
    {
      dance {
        danceStyles(stage: PUBLISHED) {
          name
        }
      }
    }
  `);

  danceStyles.forEach(({ name }) =>
    createPage({
      path: `/styles/${name}`,
      component: require.resolve(`./src/templates/DanceStyle.jsx`),
      context: {
        name,
      },
    })
  );

};