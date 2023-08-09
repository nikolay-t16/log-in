import FormInput from "../../blocks/FormInput/FormInput";
import Button from "../../blocks/Button/Button";

const LogInForm = () => {
    return (
        <div>
            <h1>Log in!</h1>
            <form>
                <FormInput/>
                <FormInput/>
                <Button/>
            </form>
        </div>
    )
}

export default LogInForm;