// ==========================================
// TORYABAH STORE
// receipt.js
// ==========================================

function downloadReceipt() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const order = JSON.parse(localStorage.getItem("lastOrder"));

    if (!order) {

        alert("No receipt found.");

        return;

    }

    // ===============================
    // HEADER
    // ===============================

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(255, 102, 0);
    doc.text("TORYABAH STORE", 20, 20);

    doc.setDrawColor(255, 102, 0);
    doc.line(20, 25, 190, 25);

    // ===============================
    // RECEIPT INFO
    // ===============================

    doc.setFontSize(12);
    doc.setTextColor(0);

    doc.text(`Order No: ${order.orderNumber || "N/A"}`, 20, 40);
    doc.text(`Payment Ref: ${order.reference || "N/A"}`, 20, 48);
    doc.text(`Payment Status: ${order.paymentStatus || "PAID"}`, 20, 56);
    doc.text(`Date: ${order.paymentDate || new Date().toLocaleString()}`, 20, 64);

    // ===============================
    // CUSTOMER
    // ===============================

    doc.setFont("helvetica", "bold");
    doc.text("Customer Information", 20, 80);

    doc.setFont("helvetica", "normal");

    doc.text(`Name: ${order.customer.fullName}`, 20, 90);
    doc.text(`Email: ${order.customer.email}`, 20, 98);
    doc.text(`Phone: ${order.customer.phone}`, 20, 106);

    // ===============================
    // PRODUCTS
    // ===============================

    let y = 125;

    doc.setFont("helvetica", "bold");
    doc.text("Items Purchased", 20, y);

    y += 10;

    doc.setFont("helvetica", "normal");

    order.items.forEach(item => {

        doc.text(
            `${item.name}  x${item.quantity}`,
            20,
            y
        );

        doc.text(
            `₦${(item.price * item.quantity).toLocaleString()}`,
            160,
            y
        );

        y += 10;

    });

    // ===============================
    // TOTAL
    // ===============================

    y += 10;

    doc.setDrawColor(180);

    doc.line(20, y, 190, y);

    y += 12;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);

    doc.text(
        `TOTAL: ${order.total}`,
        20,
        y
    );

    // ===============================
    // FOOTER
    // ===============================

    y += 25;

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");

    doc.text(
        "Thank you for shopping with Toryabah Store.",
        20,
        y
    );

    y += 8;

    doc.text(
        "We appreciate your patronage.",
        20,
        y
    );

    // ===============================
    // SAVE PDF
    // ===============================

    doc.save(`Receipt-${order.orderNumber}.pdf`);

}

// ===============================
// BUTTON
// ===============================

const receiptBtn = document.getElementById("downloadReceipt");

if (receiptBtn) {

    receiptBtn.addEventListener("click", downloadReceipt);

}