import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Button } from "@/components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/DropdownMenu"
import { Separator } from "@/components/ui/Separator"
import { BarChart3Icon, BinaryIcon, BoxIcon, CalendarCheckIcon, CalendarDaysIcon, CalendarIcon, CalendarSearchIcon, ChevronDownIcon, ClipboardCheckIcon, ClipboardIcon, ClipboardListIcon, FilePlus2Icon, FileSpreadsheetIcon, LogOutIcon, MailQuestionIcon, MenuIcon, MessageCircleIcon, MessageSquareIcon, PalmtreeIcon, PlusCircleIcon, SaveIcon, SearchIcon, SettingsIcon, SheetIcon, ShoppingCartIcon, UserIcon } from "lucide-react"
import { Menu, MenuItem, Sidebar as RPSidebar, SubMenu, useProSidebar } from "react-pro-sidebar"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const { toggleSidebar } = useProSidebar()

    return (
        <>
            <div className="sticky top-0 flex items-center justify-between border-b bg-white p-2 lg:hidden">
                <Button onClick={() => toggleSidebar()} variant="outline" className="h-10 w-10 p-0">
                    <MenuIcon size={24} />
                </Button>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center">
                            <div className="flex items-center justify-between space-x-2">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="text-sm font-semibold text-slate-900">Flen Fouleni</div>
                                </div>
                                <ChevronDownIcon className="text-slate-700" size={16} />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                                <LogOutIcon className="mr-2 h-4 w-4" />
                                Se déconnecter
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="fixed top-0 h-full max-h-screen flex-col justify-between">
                <RPSidebar width="256px" className="h-full bg-white" customBreakPoint="1024px">
                    <div className="px-3 py-4 text-sm font-semibold text-slate-700 dark:text-slate-50">Tableau de bord</div>
                    <Separator />
                    <div className="flex h-[calc(100%-54px)] flex-col justify-between">
                        <Menu className="max-h-screen overflow-y-auto">
                            {/* Surveillance => /surveillance/esm-route */}
                            <SubMenu label="Surveillance" icon={<CalendarDaysIcon size={20} strokeWidth={2.4} />} className="rounded-full text-sm font-semibold text-slate-700">
                                <MenuItem icon={<CalendarIcon size={20} strokeWidth={2.4} />} component={<Link to="/surveillance/calendrier" />}>
                                    Calendrier
                                </MenuItem>
                                <MenuItem icon={<CalendarCheckIcon size={20} strokeWidth={2.4} />} component={<Link to={"/surveillance/creer-calendrier"} />}>
                                    Créer Calendrier
                                </MenuItem>
                                <MenuItem icon={<SaveIcon size={20} strokeWidth={2.4} />} component={<Link to={"/surveillance/calendriers-sauvegardes"} />}>
                                    Calendrier sauvegardées
                                </MenuItem>
                                <MenuItem icon={<MessageCircleIcon size={20} strokeWidth={2.4} />} component={<Link to={"/surveillance/reclamations"} />}>
                                    Réclamations
                                </MenuItem>
                            </SubMenu>
                            {/* Surveillance */}
                            <Separator />
                            {/* Notes => /notes/esm-route */}
                            <SubMenu label="Notes" icon={<BinaryIcon size={20} strokeWidth={2.4} />} className="rounded-full text-sm font-semibold text-slate-700">
                                <MenuItem icon={<CalendarCheckIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Semestre 1
                                </MenuItem>
                                <MenuItem icon={<CalendarCheckIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Semestre 2
                                </MenuItem>
                                <MenuItem icon={<SettingsIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Réclamation
                                </MenuItem>
                                <MenuItem icon={<MessageSquareIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Section
                                </MenuItem>
                            </SubMenu>
                            {/* Notes */}
                            <Separator />
                            {/* Magasin */}
                            <SubMenu label="Magasin" icon={<ShoppingCartIcon size={20} strokeWidth={2.4} />} className="rounded-full text-sm font-semibold text-slate-700">
                                {/* Enseigant & Service => /enseigant/esm-route & /service/esm-route */}
                                <MenuItem icon={<CalendarSearchIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Consulter demandes
                                </MenuItem>
                                <MenuItem icon={<ClipboardCheckIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Ajouter produit (service)
                                </MenuItem>
                                <MenuItem icon={<PlusCircleIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Demande produit
                                </MenuItem>
                                <MenuItem icon={<SearchIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Consulter produit
                                </MenuItem>
                                {/* Enseigant & Service */}
                                <Separator />
                                {/* magasinier => /magasin/magasinier/esm-route */}
                                <MenuItem icon={<CalendarSearchIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Demandes
                                </MenuItem>
                                <MenuItem icon={<ClipboardListIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Factures
                                </MenuItem>
                                <MenuItem icon={<BoxIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Produits
                                </MenuItem>
                                <MenuItem icon={<SearchIcon size={20} strokeWidth={2.4} />} component={<Link to={""} />}>
                                    Fournisseurs
                                </MenuItem>
                                {/* magasinier */}
                            </SubMenu>
                            {/* Magasin */}
                            <Separator />
                            {/* Charge => /charge/esm-route */}
                            <SubMenu label="Charge" icon={<SheetIcon size={20} strokeWidth={2.4} />} className="rounded-full text-sm font-semibold text-slate-700">
                                <MenuItem icon={<CalendarDaysIcon size={20} strokeWidth={2.4} />} component={<Link to={"/charge/gestion-diplomes/"} />}>
                                    Gestion diplomes
                                </MenuItem>
                                <MenuItem icon={<FileSpreadsheetIcon size={20} strokeWidth={2.4} />} component={<Link to={"/charge/consultation-voeux/"} />}>
                                    Consultation voeux
                                </MenuItem>
                                <MenuItem icon={<SearchIcon size={20} strokeWidth={2.4} />} component={<Link to={"/charge/consultation-enseignant/"} />}>
                                    Consultation enseignant
                                </MenuItem>
                                <MenuItem icon={<UserIcon size={20} strokeWidth={2.4} />} component={<Link to={"/charge/profile-information/"} />}>
                                    Profile information
                                </MenuItem>
                                <MenuItem icon={<FilePlus2Icon size={20} strokeWidth={2.4} />} component={<Link to={"/charge/soumettre-voeux/"} />}>
                                    Soumettre voeux
                                </MenuItem>
                            </SubMenu>
                            {/* Charge */}
                            <Separator />
                            {/* Congé */}
                            <SubMenu label="Congé" icon={<PalmtreeIcon size={20} strokeWidth={2.4} />} className="rounded-full text-sm font-semibold text-slate-700">
                                {/* Enseigant => /conge/enseignant/esm-route */}
                                <MenuItem icon={<MailQuestionIcon size={20} strokeWidth={2.4} />} component={<Link to={"conge/enseignant/demande-conge"} />}>
                                    Demande un congé
                                </MenuItem>
                                <MenuItem icon={<ClipboardIcon size={20} strokeWidth={2.4} />} component={<Link to={"conge/enseignant/mes-demandes"} />}>
                                    Mes demandes
                                </MenuItem>
                                {/* Enseigant */}
                                <Separator />
                                {/* Admin => /congé/admin/esm-route */}
                                <MenuItem icon={<ClipboardListIcon size={20} strokeWidth={2.4} />} component={<Link to={"/conge/admin/les-demandes"} />}>
                                    Les demandes
                                </MenuItem>
                                <MenuItem icon={<BarChart3Icon size={20} strokeWidth={2.4} />} component={<Link to={"/conge/admin/statistiques"} />}>
                                    Statistiques
                                </MenuItem>
                                {/* Admin */}
                            </SubMenu>
                            {/* Congé */}
                        </Menu>
                        <div className="mt-auto w-64 border-r">
                            <Separator />
                            <div className="flex justify-between p-3">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <div className="text-sm font-semibold text-slate-900">Flen Fouleni</div>
                                        <p className="text-xs text-slate-400">flen@fouleni.com</p>
                                    </div>
                                </div>
                                <Button variant="ghost">
                                    <LogOutIcon className="h-5 w-5 text-slate-700" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </RPSidebar>
            </div>
        </>
    )
}

export default Sidebar
