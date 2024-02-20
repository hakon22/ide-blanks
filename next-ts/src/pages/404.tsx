import Helmet from '../components/Helmet';

const Page404 = () => (
  <div className="my-4 row d-flex justify-content-center">
    <div className="col-12 col-md-8">
      <Helmet title="404" description="404" />
      404
    </div>
  </div>
);

export default Page404;
