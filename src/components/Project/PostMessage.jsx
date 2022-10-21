import { useForm } from "react-hook-form";
import styles from "../../mystyle.module.css";
import postmessage from "../../assets/sendmessage.svg";
import { chatAdd } from "../../api/messageboard";

const PostMessage = ({chatid}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitChatMessage = (input) => {
    input.preventDefault();
    if (input.target.message.value.length < 1) {
      console.log("message too short");
    } else {
      chatAdd()
      console.log(input.target.message.value + " " + chatid);
    }
    input.target.reset();
  };

  return (
    <div className={styles.projectCard}>
      <h1 className="text-xl m-2">Post message</h1>
      <form className="w-full" onSubmit={onSubmitChatMessage}>
        <fieldset>
          <button
            type="submit"
            className="text-2xl ml-auto mx-4 float-right my-2 flex"
          >
            <p>Send</p>
            <img className="m-2" src={postmessage} alt="" />
          </button>
          <label htmlFor="message"> </label>
          <textarea
            className="mx-4 border my-2 w-4/6 h-24 px-2"
            type="text"
            autoComplete="off"
            placeholder="Message..."
            {...register("message")}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default PostMessage;
