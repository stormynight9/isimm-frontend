import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"

const AjouterProduit = () => {
    return (
        <div style={{ margin: "120px" }}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Ajouter produit au service</h1>
            <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">Ici, vous pouvez demander un produit du magasin de l'université</h2>
            <div className="font max-w-md scroll-m-20 text-4xl">
                <Label htmlFor="Nom de produit">Nom de produit</Label>
                <Input type="text" id="nom" placeholder="Nom de produit" />
                <Label>Quantité demandée</Label>
                <Input type="number" id="qte" placeholder="Quantité demandée" />
                <Label>Commentaires</Label>
                <Textarea placeholder="Votre commentaire ici" />

                <Button>Ajouter produit</Button>
            </div>
        </div>
    )
}

export default AjouterProduit
