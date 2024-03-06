"use server";

export default async function Imprint() {

    return (
        <div className="w-screen min-h-screen pt-20 p-10">
            <h1 className="text-4xl font-bold">Impressum</h1>
            <p>Name des Betreibers: Max Mustermann</p>
            <p>Adresse: Musterstraße 123, 12345 Musterstadt</p>
            <p>Telefon: 01234 / 567890</p>
            <p>E-Mail: max.mustermann@example.com</p>
            <p>Umsatzsteuer-ID: DE123456789</p>

            <h1 className="text-4xl font-bold mt-4">Datenschutzerklärung</h1>
            <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) im Rahmen der Nutzung unserer Website auf.</p>
            <h2 className="text-xl font-semibold mt-2">1. Verantwortlicher</h2>
            <p>Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
            <p>Name des Betreibers: Max Mustermann</p>
            <p>Adresse: Musterstraße 123, 12345 Musterstadt</p>
            <p>E-Mail: max.mustermann@example.com</p>
            <h2 className="text-xl font-semibold mt-2">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>
            <p>Wir verwenden keine Tracking-Tools oder Analysesoftware, die personenbezogene Daten von Ihnen erhebt oder speichert. Unsere Website verwendet nur einen essentiellen Cookie für die Sitzung, um die Funktionalität der Website zu gewährleisten. Der Cookie wird automatisch gelöscht, wenn Sie Ihren Browser schließen.</p>
            <h2 className="text-xl font-semibold mt-2">3. Rechte der betroffenen Personen</h2>
            <p>Sie haben das Recht:</p>
            <ul className="list-decimal pl-4">
                <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts sowie die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, verlangen;</li>
                <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;</li>
                <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;</li>
                <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
                <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen und</li>
                <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-2">4. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2024.</p>
        </div>
    );
}