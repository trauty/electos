"use server";

import { getReceipts } from "@/actions/getReceipts";
import { getSession } from "@/actions/session";
import { IReceipt } from "@/types";
import { revalidatePath } from "next/cache";

export default async function Dashboard() {
    const session = await getSession();

    const receipts: IReceipt[] | null = await getReceipts();

    const createdDate = new Date(session.createdAt).toLocaleDateString("de");
    const updatedDate = new Date(session.updatedAt).toLocaleDateString("de");

    return (
        <div className="w-screen min-h-screen pt-20 p-10">
            <h1 className="font-bold text-4xl mb-4">Kontoübersicht</h1>
            <div>
                {session &&
                    <div>
                        <div className="bg-electos-black-700 h-fit w-full text-electos-white rounded-xl px-4 py-2">
                            <h2 className="font-semibold text-xl">Kontodaten</h2>
                            <p><span className="font-medium">E-Mail-Adresse: </span>{session.email}</p>
                            <p><span className="font-medium">Vorname: </span>{session.firstName}</p>
                            <p><span className="font-medium">Nachname: </span>{session.lastName}</p>
                            <p><span className="font-medium">IBAN: </span>{session.iban}</p>
                            <p><span className="font-medium">BLZ: </span>{session.blz}</p>
                            <p><span className="font-medium">Insitution: </span>{session.institution}</p>
                            <p><span className="font-medium">Konto erstellt: </span>{createdDate}</p>
                            <p><span className="font-medium">Konto zuletzt aktualisiert: </span>{updatedDate}</p>
                        </div>

                        <h1 className="font-bold text-4xl mt-4">Rechnungen</h1>

                        <div className="bg-electos-black-700 h-fit w-full text-electos-white rounded-xl px-4 py-2 mt-4 flex flex-col">
                            <div>
                                {receipts == null &&
                                    <div>
                                        <span className="text-xl font-semibold">Keine Rechnungen vorhanden.</span>
                                    </div>
                                }
                                {receipts?.map((receipt, key) => {
                                    return (
                                        <div key={key} className="flex flex-row gap-8">
                                            <p>Rechnungsnummer: {receipt.receipt_id}</p>
                                            <p>Datum: {new Date(receipt.created_at).toLocaleDateString("de")}</p>
                                            <p>Summe: {receipt.total_sum}€</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}