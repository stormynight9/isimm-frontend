import Badge from "../ui/Badge";

export default function DemandeBadge({status}) {
    const badge = {
        pending: <Badge status="yellow">En attente</Badge>,
        verified: <Badge status="green">Vérifié</Badge>,
        refused: <Badge status="red">Réfusé</Badge>,
        fulfilled: <Badge status="green">Fulfilled</Badge>,
    }

    return badge[status];
}