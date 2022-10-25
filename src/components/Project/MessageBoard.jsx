import styles from "../../mystyle.module.css";

const MessageBoard = ({chat}) => {
  return (
    <div className={styles.projectCard}>
      <h1 className="text-xl m-2">Messageboard</h1>
      <div className="flex w-11/12 bg-slate-100 mx-auto my-4">
      <section className="w-2/3 m-4">
      {chat.messages && (
        <ul className="">
          {chat.messages.map((message) => (
            <div key={chat.id + " " + message.text}>
            <p className="bg-slate-300 m-2 rounded-md px-2 py-1">{message.text}</p>
            </div>
          ))}
        </ul>
      )}
      </section>
      </div>
    </div>
  );
};

export default MessageBoard;
