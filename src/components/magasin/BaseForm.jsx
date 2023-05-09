import { Button } from "../ui/Button";
import BasePage from "./BasePage";

export default function BaseForm({children, title, onSave, type}) {
    function handleSubmitInner(e) {
        e.preventDefault();
        onSave(e);
    }

    return <BasePage title={title}>
        <form className="flex items-stretch flex-col" onSubmit={handleSubmitInner}>
            {children}
            {/* <Button type="submit" className="self-end" onClick={onSave}>Enregistrer</Button> */}
            {(type === 'add' || type === 'edit') && <Button type="submit" className="self-end">Enregistrer</Button>}
        </form>
    </BasePage>
}