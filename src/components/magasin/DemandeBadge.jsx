import Badge from "../ui/Badge";

// badge de demande
export default function DemandeBadge({status, className}) {
    const badge = {
        pending: <Badge className={className} status="yellow">En attente</Badge>,
        approved: <Badge className={className} status="green">Vérifié</Badge>,
        rejected: <Badge className={className} status="red">Réfusé</Badge>,
        fullfield: <Badge className={className} status="green">Fulfilled</Badge>,
    }

    return badge[status];
}