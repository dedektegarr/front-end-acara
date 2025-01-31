import PageHead from "@/components/commons/PageHead";
import { ReactNode } from "react";

interface PropTypes {
  title?: string;
  children: ReactNode;
}

const AuthLayout = ({ title, children }: PropTypes) => {
  return (
    <>
      <PageHead title={title} />
      <section className="max-w-screen-2xl 2xl:container p-6">
        {children}
      </section>
    </>
  );
};

export default AuthLayout;
