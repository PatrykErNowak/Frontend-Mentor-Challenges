type WrapperProps = {
  children: React.ReactElement[] | React.ReactElement;
};

function Wrapper({ children }: WrapperProps) {
  return <div className="w-[min(calc(100%-50px))] max-w-[540px] mx-auto relative z-10">{children}</div>;
}

export default Wrapper;
