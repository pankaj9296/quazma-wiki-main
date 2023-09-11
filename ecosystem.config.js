module.exports = {
  apps : [{
    name: 'WIKI',
    script: './build/server/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    instance_var: 'INSTANCE_ID',
  }],
};
