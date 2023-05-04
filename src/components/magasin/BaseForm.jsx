import { Button } from "../ui/Button";
import BasePage from "./BasePage";

export default function BaseForm({children, title, onSave, handleSubmit}) {
    function handleSubmitInner(e) {
        e.preventDefault();
        handleSubmit(e);
    }

    return <BasePage title={title}>
        <form onSubmit={handleSubmitInner}>
            {children}
            <Button className="self-end" onClick={onSave}>Enregistrer</Button>
        </form>
    </BasePage>
}