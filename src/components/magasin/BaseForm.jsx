import { Button } from "../ui/Button";
import BasePage from "./BasePage";

export default function BaseForm({children, title, onSave}) {
    return <BasePage title={title}>
        {children}
        <Button className="self-end" onClick={onSave}>Enregistrer</Button>
    </BasePage>
}