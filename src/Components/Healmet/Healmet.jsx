import { Helmet } from "react-helmet";

const Healmet = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default Healmet;
