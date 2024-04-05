import ImgPage from "../imgPage/imgPage";
import "./pagination.css";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="pagination">
      <ImgPage
        src="/assets/back.png"
        alt="back"
        funct={() => setPage(page === 1 ? 1 : page - 1)}
        disabled={page === 1}
        setPage={setPage}
      />
      <p>{page}</p>
      <ImgPage
        src="/assets/next.png"
        alt="next"
        funct={() => setPage(page < totalPages ? page + 1 : page)}
        disabled={page === totalPages}
        setPage={setPage}
      />
    </div>
  );
};

export default Pagination;
