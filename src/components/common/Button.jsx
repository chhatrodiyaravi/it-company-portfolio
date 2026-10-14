import { Link } from "react-router-dom";

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary:
    "border border-ink-950 text-ink-950 hover:bg-ink-950 hover:text-white",
};

function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const buttonClassName = `inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none ${variants[variant]} ${className}`;

  if (!href) {
    return (
      <button className={buttonClassName} {...props}>
        {children}
      </button>
    );
  }

  if (href?.startsWith("/")) {
    return (
      <Link className={buttonClassName} to={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={buttonClassName} href={href} {...props}>
      {children}
    </a>
  );
}

export default Button;
