import ServicedRouter from "../routers/Service";
import AccountRouter from "../routers/Account";
import ApartmentRouter from "../routers/Apartment";
import ArticleRouter from "../routers/Article";
import ServiceArticleRouter from "../routers/ServiceArticle";
function route(app) {
  app.use("/api", ServicedRouter);
  app.use("/api", AccountRouter);
  app.use("/api", ApartmentRouter);
  app.use("/api", ArticleRouter);
  app.use("/api", ServiceArticleRouter);
}
export default route;
