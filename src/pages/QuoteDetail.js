import { Fragment } from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1> The QuoteDetail page</h1>
      <p>{params.quoteId}</p>
    </Fragment>
  );
};

export default QuoteDetail;
