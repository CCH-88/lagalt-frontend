import styles from "../../mystyle.module.css";

//takes the chat object of a project and displays the messages 
const MessageBoard = ({ chat }) => {
  return (
    <div className={styles.projectCard}>
      <h1 className="text-xl m-2">Messageboard</h1>
      <div className="flex w-11/12 bg-slate-100 mx-auto my-4">
        <section className="w-2/3 m-4">
          {chat && (
            <ul className="">
              {chat.map((message) => (
                <div key={chat.id + " " + message.text}>
                  <span>{message.dateTime.slice(0, 10)} :</span>
                  <span>{message.dateTime.slice(11, 16)}</span>
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
