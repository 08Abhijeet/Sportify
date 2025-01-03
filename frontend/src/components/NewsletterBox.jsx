const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-slate-50 ">
        Subscribe now & get 20% off
      </p>
      <p className="text-slate-50 mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In saepe ab
        velit assumenda ipsam sed dicta fugiat deleniti
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button
          onSubmit={onSubmitHandler}
          className="bg-white text-black text-xs px-10 py-4"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
