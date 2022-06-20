type Props = {
  content: string;
};

const Title = (props: Props) => {
  return <h1 className="title">{props.content}</h1>;
};

export default Title;
