type Props = {
  content: string;
};

const Title = (props: Props) => {
  return <h1>{props.content}</h1>;
};

export default Title;
