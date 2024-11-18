import ServicedRouter from "../routers/Service";
import AccountRouter from "../routers/Account";
import ApartmentRouter from "../routers/Apartment";
import ArticleRouter from "../routers/Article";
import ServiceArticleRouter from "../routers/ServiceArticle";
import ContactRouter from "../routers/Contact";
import BannerRouter from "../routers/Banner";
function route(app) {
  app.use("/api", ServicedRouter);
  app.use("/api", AccountRouter);
  app.use("/api", ApartmentRouter);
  app.use("/api", ArticleRouter);
  app.use("/api", ServiceArticleRouter);
  app.use("/api", ContactRouter);
  app.use("/api", BannerRouter);
}
export default route;
