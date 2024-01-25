FROM odoo:16.0

COPY odoo.conf /etc/odoo/odoo.conf
COPY custom-addons /mnt/extra-addons
COPY data-dir /mnt/data-dir
COPY enterprise /mnt/enterprise

EXPOSE 8069
EXPOSE 10522

CMD ["odoo", "--config=/etc/odoo/odoo.conf"]