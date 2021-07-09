import classes from "./styles.module.css";

const PageNotFound = () => {
  document.title = "Page Not Found";

  return (
    <div className={classes.page_not_found}>
      <h1>404 Error - Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
