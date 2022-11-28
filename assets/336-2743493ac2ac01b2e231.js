"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [336],
  {
    336: (e, t, n) => {
      n.r(t),
        n.d(t, {
          run: () => Re,
        });
      var a = n(7294),
        o = n(3935),
        r = n(5988),
        s = n(4394),
        i = n(4508),
        l = n(3362);
      const c = class {
          constructor(e = []) {
            this.roles = e.map(([e, t]) => ({
              name: e,
              resource: t,
            }));
          }
        },
        m = class {
          constructor(e, t, n = !1) {
            (this.name = t), (this.organization = e), (this.isPublic = n);
          }
        },
        d = class {
          constructor(e) {
            this.name = e;
          }
        },
        p = {
          google: new d("google"),
          facebook: new d("facebook"),
        },
        u = {
          gmail: new m(p.google, "gmail"),
          search: new m(p.google, "search"),
          messenger: new m(p.facebook, "messenger"),
          instagram: new m(p.facebook, "instagram"),
          react: new m(p.facebook, "react", !0),
        },
        f = {
          none: {
            name: "Allow anything",
            polar:
              "\n# This rule matches all inputs, allowing\n# any actor to perform any action on any\n# resource. Not very useful...\nallow(_actor, _action, _resource);\n".trim(),
            users: {
              "-": new c(),
            },
          },
          empty: {
            name: "Empty",
            displayPolar:
              "\n# docketgo is deny-by-default, so an empty policy\n# means nobody can do anything. This system is\n# locked down.\n".trim(),
            polar: "allow(_, _, _) if false;",
            users: {
              "-": new c(),
            },
          },
          read: {
            name: "Only public repos",
            polar:
              '\n# Allow any user to perform the "read" action\n# on a repository if it is public. Note that\n# the delete button is disabled, because no\n# one has permission to delete it.\nallow(_actor, "read", repository: Repository) if\n  repository.isPublic;\n'.trim(),
            users: {
              "-": new c(),
            },
          },
          rbac: {
            name: "Basic RBAC",
            polar:
              '\nactor User {}\n\n# Now roles are involved -- users have roles\n# on repositories, granting them permissions\n# specific to each repository.\nresource Repository {\n  permissions = ["read", "delete"];\n  roles = ["reader", "admin"];\n\n  "delete" if "admin";\n  "read" if "reader";\n\n  "reader" if "admin";\n}\n\nhas_role(actor: User, role_name: String, resource: Repository) if\n  role in actor.roles and\n  role.name = role_name and\n  role.resource = resource;\n\nhas_permission(_actor: User, "read", repository: Repository) if\n  repository.isPublic;\n\nallow(actor, action, resource) if\n  has_permission(actor, action, resource);\n'.trim(),
            users: {
              "Admin of gmail": new c([["admin", u.gmail]]),
              "Reader of instagram": new c([["reader", u.instagram]]),
            },
          },
          advanced: {
            name: "Advanced RBAC",
            polar:
              '\nactor User {}\n\nresource Repository {\n  permissions = ["read", "delete"];\n  roles = ["reader", "admin"];\n  relations = { parent: Organization };\n\n  "delete" if "admin";\n  "read" if "reader";\n\n  "reader" if "admin";\n  "reader" if "member" on "parent";\n  "admin" if "owner" on "parent";\n}\n\nresource Organization {\n  roles = ["member", "owner"];\n  "member" if "owner";\n}\n\nhas_role(actor: User, role_name: String, resource: Resource) if\n  role in actor.roles and\n  role.name = role_name and\n  role.resource = resource;\n\nhas_relation(organization: Organization,\n             "parent", repository: Repository) if\n  repository.organization = organization;\n\nhas_permission(_actor: User, "read", repository: Repository) if\n  repository.isPublic;\n\nallow(actor, action, resource) if\n  has_permission(actor, action, resource);\n'.trim(),
            users: {
              "Member of google": new c([["member", p.google]]),
              "Owner of facebook": new c([["owner", p.facebook]]),
              "Reader of search": new c([["reader", u.search]]),
              "Multiple roles": new c([
                ["admin", u.messenger],
                ["reader", u.gmail],
              ]),
            },
          },
        };

      function b() {
        return (
          (b =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          b.apply(this, arguments)
        );
      }
      const g = "rgb(45, 43, 85)";
      (l.Z.comment.color = "#bc7ff5"), s.Z.registerLanguage("ruby", i.Z);
      const h =
          window.LEARN_MORE_URL ||
          "https://docs.docketgohq.com/getting-started/quickstart.html",
        y = (e) =>
          a.createElement(
            "h1",
            b({}, e, {
              className:
                "jsx-2491313739 " +
                ((e && null != e.className && e.className) || ""),
            }),
            e.children,
            a.createElement(
              r.default,
              {
                id: "2491313739",
              },
              [
                'h1.jsx-2491313739{font-size:1.25rem;line-height:1.75rem;margin:0;font-family:"Space Grotesk",-apple-system,BlinkMacSystemFont, "Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans", "Helvetica Neue",sans-serif;}',
              ]
            )
          );

      function x({ organization: e }) {
        return a.createElement(
          "span",
          {
            style: {
              color: "rgb(37, 99, 235)",
              fontWeight: 400,
            },
          },
          e.name
        );
      }

      function w({ repo: e }) {
        return a.createElement(
          "span",
          null,
          a.createElement(x, {
            organization: e.organization,
          }),
          " ",
          a.createElement(
            "span",
            {
              style: {
                color: "rgb(156, 163, 175)",
              },
            },
            "/"
          ),
          " ",
          a.createElement(
            "span",
            {
              style: {
                color: "rgb(37, 99, 235)",
                fontWeight: 600,
              },
            },
            e.name
          )
        );
      }

      function k({ repo: e, canDelete: t }) {
        return a.createElement(
          "div",
          {
            className: "jsx-4044204037 repo",
          },
          a.createElement(
            r.default,
            {
              id: "4044204037",
            },
            [
              ".repo.jsx-4044204037{padding:0.5rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
              ".public.jsx-4044204037{font-size:0.75rem;line-height:1rem;font-weight:400;color:rgb(75,85,99);border:1px solid rgb(209,213,219);border-radius:0.25rem;padding:0.125rem 0.25rem;margin-left:0.25rem;}",
              ".delete{color:white;background-color:rgb(190,24,93);}",
              ".delete:disabled{color:white;background-color:rgb(209,213,219);}",
            ]
          ),
          a.createElement(
            "span",
            {
              className: "jsx-4044204037",
            },
            a.createElement(w, {
              repo: e,
            }),
            e.isPublic &&
              a.createElement(
                "span",
                {
                  className: "jsx-4044204037 public",
                },
                "Public"
              )
          ),
          a.createElement(
            v,
            {
              small: !0,
              className: "delete",
              disabled: !t,
            },
            "Delete"
          )
        );
      }

      function E(e) {
        return a.createElement(
          "select",
          b(
            {
              style: {
                color: "black",
                border: "1px solid",
                borderColor: g,
                padding: 2,
                borderRadius: "4px",
                background: "white",
              },
            },
            e
          )
        );
      }

      function v({ small: e, ...t }) {
        return a.createElement(
          "button",
          b(
            {
              style: {
                padding: e ? "0.2rem 0.6rem" : "0.25rem 0.75rem",
                borderRadius: 4,
                border: "0 none",
                fontSize: e ? "14px" : "16px",
                cursor: "pointer",
                lineHeight: e ? "1.35" : "1.15",
                color: "white",
              },
            },
            t
          )
        );
      }
      const j = Object.values(u)
        .map((e) => [
          ["read", e],
          ["delete", e],
        ])
        .flat(1);

      function R() {
        const [e, t] = (0, a.useState)("none"),
          o = f[e],
          i = Object.keys(f),
          p = i[i.indexOf(e) + 1],
          [b, R] = (0, a.useState)(Object.keys(o.users)[0]),
          [N, S] = (0, a.useState)(null);
        (0, a.useEffect)(async () => {
          Promise.all([n.e(991), n.e(880)])
            .then(n.bind(n, 5991))
            .then((e) => {
              S(() => e.docketgo);
            });
        });
        const C = o.users[b] || o.users[Object.keys(o.users)[0]],
          O = (0, a.useMemo)(() => {
            if (!N) return null;
            const e = new N();
            return (
              e.registerClass(c, {
                name: "User",
              }),
              e.registerClass(m, {
                name: "Repository",
              }),
              e.registerClass(d, {
                name: "Organization",
              }),
              e
            );
          }, [N]);
        (0, a.useEffect)(() => {
          O &&
            (O.clearRules(),
            O.loadStr(o.polar),
            (window.docketgo = O),
            (window.repos = u));
        }, [O, o]);
        const [_, A] = (0, a.useState)(j);
        (0, a.useEffect)(async () => {
          if (!O) return;
          let e = await Promise.all(
            Object.values(u).map(async (e) => {
              const t = await O.isAllowed(C, "read", e),
                n = await O.isAllowed(C, "delete", e),
                a = [];
              return t && a.push(["read", e]), n && a.push(["delete", e]), a;
            })
          );
          (e = e.flat(1)), A(e);
        }, [O, o, A, C]);
        const I = _.filter(([e, t]) => "read" == e).map(([e, t]) => t),
          M = _.filter(([e, t]) => "delete" == e).map(([e, t]) => t);
        return a.createElement(
          "div",
          {
            style: {
              minHeight: 500,
              maxHeight: 500,
            },
            className: "jsx-1298411406 docketgo-web-demo",
          },
          a.createElement(
            r.default,
            {
              id: "1298411406",
            },
            [
              '.docketgo-web-demo.jsx-1298411406{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-font-smoothing:antialiased;font-family:ui-sans-serif,system-ui,-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial, "Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol","Noto Color Emoji";}',
              ".policy-container.jsx-1298411406{color:rgb(229,231,235);border-radius:0.5rem;padding:1.5rem;padding-right:5rem;width:66.66%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",
              ".policy-container.jsx-1298411406 h1{color:rgb(229,231,235);}",
              ".policy-selector.jsx-1298411406{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1.25rem;}",
              ".next{background-color:rgb(59,130,246);}",
              ".next:hover{background-color:rgb(96,165,250);}",
              ".ml-3.jsx-1298411406{margin-left:0.75rem;}",
              ".pb-4.jsx-1298411406{padding-bottom:1rem;}",
              ".pb-2.jsx-1298411406{padding-bottom:0.5rem;}",
              ".code.jsx-1298411406{position:relative;overflow:hidden;}",
              ".code.jsx-1298411406 pre{overflow:auto;font-size:1rem;line-height:1.5rem;height:100%;}",
              '.code.jsx-1298411406 code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas, "Liberation Mono","Courier New",monospace;}',
              ".shadow.jsx-1298411406{position:absolute;left:0;right:0;bottom:0;height:60px;background:linear-gradient(#2d2b5500,#2d2b55);}",
              ".demo-app-container.jsx-1298411406{padding:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:0 0.25rem 0.25rem 0;}",
              ".role-selector.jsx-1298411406{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:1rem;-webkit-box-pack:end;-webkit-justify-content:end;-ms-flex-pack:end;justify-content:end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
              ".demo-app.jsx-1298411406{background:#fff;color:rgb(17,24,39);-webkit-flex:1;-ms-flex:1;flex:1;border-radius:0.5rem;border:1px solid rgb(209,213,219);margin-left:-4rem;box-shadow:rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.05) 0px 4px 6px -2px;}",
              ".demo-app-url-bar.jsx-1298411406{border-bottom:1px solid rgb(229,231,235);border-radius:0.5rem 0.5rem 0 0;padding:0.5rem;background-color:rgb(243,244,246);}",
              ".demo-app-url-bar.jsx-1298411406 div.jsx-1298411406{border-radius:2rem;background:white;padding:0.25rem 1rem;}",
              ".demo-app-inner.jsx-1298411406{padding:1rem;position:relative;}",
              ".sample-app-badge.jsx-1298411406{position:absolute;top:0;right:0;margin:1rem;font-size:0.75rem;line-height:1rem;color:rgb(107,114,128);padding:0.25rem 0.5rem;border:1px solid rgb(229,231,235);border-radius:0.25rem;}",
              ".no-repos.jsx-1298411406{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#888;}",
              "@media screen and (max-width:640px){.policy-container.jsx-1298411406{padding-right:1.5rem;width:100%;}.code.jsx-1298411406 pre{font-size:0.75rem;line-height:1rem;}.demo-app-container.jsx-1298411406{display:none;}}",
            ]
          ),
          a.createElement(
            "div",
            {
              style: {
                background: g,
              },
              className: "jsx-1298411406 policy-container",
            },
            a.createElement(
              "div",
              {
                className: "jsx-1298411406 policy-selector",
              },
              a.createElement(y, null, "Policy:"),
              a.createElement(
                "div",
                {
                  className: "jsx-1298411406 ml-3",
                },
                a.createElement(
                  E,
                  {
                    value: e,
                    onChange: (e) => t(e.target.value),
                  },
                  Object.entries(f).map(([e, t]) =>
                    a.createElement(
                      "option",
                      {
                        value: e,
                        key: e,
                        className: "jsx-1298411406",
                      },
                      t.name
                    )
                  )
                )
              ),
              a.createElement(
                "div",
                {
                  className: "jsx-1298411406 ml-3",
                },
                p
                  ? a.createElement(
                      v,
                      {
                        className: "next",
                        onClick: () => t(p),
                      },
                      "Next"
                    )
                  : a.createElement(
                      "a",
                      {
                        href: h,
                        className: "jsx-1298411406",
                      },
                      a.createElement(
                        v,
                        {
                          className: "next",
                        },
                        "Try it →"
                      )
                    )
              )
            ),
            a.createElement(
              "div",
              {
                className: "jsx-1298411406 code",
              },
              a.createElement(
                s.Z,
                {
                  customStyle: {
                    padding: "0 0 60px",
                    margin: 0,
                    overflow: "auto",
                    backgroundColor: g,
                  },
                  language: "ruby",
                  style: l.Z,
                },
                o.displayPolar || o.polar
              ),
              a.createElement("div", {
                className: "jsx-1298411406 shadow",
              })
            )
          ),
          a.createElement(
            "div",
            {
              className: "jsx-1298411406 demo-app-container",
            },
            a.createElement(
              "div",
              {
                style: {
                  visibility:
                    Object.keys(o.users).length > 1 ? "visible" : "hidden",
                },
                className: "jsx-1298411406 role-selector",
              },
              a.createElement(y, null, "View as:"),
              a.createElement(
                "div",
                {
                  className: "jsx-1298411406 ml-3",
                },
                a.createElement(
                  E,
                  {
                    value: b,
                    onChange: (e) => R(e.target.value),
                  },
                  Object.keys(o.users).map((e) =>
                    a.createElement(
                      "option",
                      {
                        key: e,
                        className: "jsx-1298411406",
                      },
                      e
                    )
                  )
                )
              )
            ),
            a.createElement(
              "div",
              {
                className: "jsx-1298411406 demo-app",
              },
              a.createElement(
                "div",
                {
                  className: "jsx-1298411406 demo-app-url-bar",
                },
                a.createElement(
                  "div",
                  {
                    className: "jsx-1298411406",
                  },
                  "gitclub.com"
                )
              ),
              a.createElement(
                "div",
                {
                  className: "jsx-1298411406 demo-app-inner",
                },
                a.createElement(
                  "div",
                  {
                    className: "jsx-1298411406 sample-app-badge",
                  },
                  "Sample app"
                ),
                C.roles.length > 0 &&
                  a.createElement(
                    "div",
                    {
                      className: "jsx-1298411406",
                    },
                    a.createElement(y, null, "Roles"),
                    a.createElement("div", {
                      className: "jsx-1298411406 pb-4",
                    }),
                    a.createElement(
                      "div",
                      {
                        className: "jsx-1298411406 ",
                      },
                      C.roles.map(({ name: e, resource: t }) =>
                        a.createElement(
                          "div",
                          {
                            key: `${e}${JSON.stringify(t)}`,
                            className: "jsx-1298411406",
                          },
                          a.createElement(
                            "span",
                            {
                              style: {
                                fontWeight: 600,
                              },
                              className: "jsx-1298411406",
                            },
                            e
                          ),
                          " ",
                          a.createElement(
                            "span",
                            {
                              style: {
                                fontSize: "0.875rem",
                              },
                              className: "jsx-1298411406",
                            },
                            "on"
                          ),
                          " ",
                          t instanceof d
                            ? a.createElement(x, {
                                organization: t,
                              })
                            : a.createElement(w, {
                                repo: t,
                              })
                        )
                      )
                    ),
                    a.createElement("div", {
                      className: "jsx-1298411406 pb-4",
                    })
                  ),
                a.createElement(y, null, "Repos"),
                a.createElement("div", {
                  className: "jsx-1298411406 pb-2",
                }),
                a.createElement(
                  "div",
                  {
                    className: "jsx-1298411406 with-dividers",
                  },
                  I.map((e) =>
                    a.createElement(k, {
                      repo: e,
                      key: e.name,
                      canDelete: M.includes(e),
                    })
                  )
                ),
                !I.length &&
                  a.createElement(
                    "div",
                    {
                      className: "jsx-1298411406 no-repos",
                    },
                    "No repos :("
                  ),
                a.createElement("div", {
                  className: "jsx-1298411406 pb-2",
                })
              )
            )
          )
        );
      }
      var N = n(4303);
      const S = {
        beAnOwner: {
          name: "Be an owner",
          polar:
            "\n# Be an owner\n\n**We succeed by empowering decision-making and\naccountability with the individual. It only\nworks if each of us takes it on.**\n\n- Focus on *goals* rather than *tasks*; how you\n  meet the goal can be up to you\n- Speak up when a project or goal doesn’t make\n  sense to you\n- If you see trash on the floor, *pick it up*\n- Do what you say, say what you do\n".trim(),
        },
        shipIt: {
          name: "Ship it",
          polar:
            '\n# Ship it\n\n**The best code is the code that gets used.**\n\n- Break it down, *ship it*\n- Cut scope, not quality\n- Practice ["worse is better"][1]\n\n[1]: https://www.dreamsongs.com/WorseIsBetter.html\n'.trim(),
        },
        beForTheMakers: {
          name: "Be for the makers",
          polar:
            "\n# Be for the makers\n\n**Developers will have an outsize impact on the\n21st century – if we help them succeed, we\nsucceed too.**\n\n- Make easy things easy, and impossible things\n  possible\n- Assume your user is lazy – shave down friction\n  everywhere. Related: see the [three great\n  virtues of a programmer][1]\n- Do what you think would get a developer to\n  become a card-carrying member of the docketgo club\n  for life\n\n[1]: http://threevirtues.com/\n".trim(),
        },
        practiceFeedback: {
          name: "Practice feedback daily",
          polar:
            "\n# Practice giving and taking feedback daily\n\n**Feedback is how we get better, address\nissues, and hold ourselves to a high bar.**\n\n- Scope your feedback to work and behavior and\n  there's nothing for anyone to take personally\n- Be specific\n- Practice [Radical Candor][1]\n- Feedback happens in all directions,\n  regardless of your position\n\n[1]: https://review.firstround.com/radical-candor-the-surprising-secret-to-being-a-good-boss\n".trim(),
        },
        echoChamber: {
          name: "Pierce your echo chamber",
          polar:
            "\n# Pierce your echo chamber\n\n**Diversity of inputs leads to better outputs.**\n\n- Acknowledge you don't know most things\n- Look for your blind spots by talking to\n  people who aren't like you\n- Ask questions\n".trim(),
        },
        alwaysBeLearning: {
          name: "Always be learning",
          polar:
            "\n# Always be learning\n\n**We won't be perfect at anything right away,\nbut we can achieve anything with practice.**\n\n- Don’t be afraid to take something on just\n  because you don’t know how to do it yet\n- *Learn by doing*\n- Embrace the struggle\n".trim(),
        },
        beAHuman: {
          name: "Be a human",
          polar:
            "\n# Be a human\n\n**We perform -- well, poorly, or\nnot at all -- as teammates.**\n\n- Have your teammate's back and\n  cheer them on\n- Look for the person behind the\n  teammate\n- Do what you believe would get\n  your teammate to refer you at\n  their next company\n".trim(),
        },
      };

      function C() {
        return (
          (C =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          C.apply(this, arguments)
        );
      }
      const O = "rgb(45, 43, 85)",
        _ = "#bc7ff5",
        A = "#a5ff90";
      (l.Z.comment.color = _),
        (l.Z.bold.color = _),
        (l.Z.italic.color = A),
        (l.Z.url.color = A),
        (l.Z.url.textDecoration = "none"),
        s.Z.registerLanguage("markdown", N.Z);
      const I = window.LEARN_MORE_URL || "#current-openings",
        M = (e) =>
          a.createElement(
            "h1",
            C({}, e, {
              className:
                "jsx-2491313739 " +
                ((e && null != e.className && e.className) || ""),
            }),
            e.children,
            a.createElement(
              r.default,
              {
                id: "2491313739",
              },
              [
                'h1.jsx-2491313739{font-size:1.25rem;line-height:1.75rem;margin:0;font-family:"Space Grotesk",-apple-system,BlinkMacSystemFont, "Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans", "Helvetica Neue",sans-serif;}',
              ]
            )
          );

      function P(e) {
        return a.createElement(
          "select",
          C(
            {
              style: {
                color: "black",
                border: "1px solid",
                borderColor: O,
                padding: 2,
                borderRadius: "4px",
                background: "white",
              },
            },
            e
          )
        );
      }
      const U = a.forwardRef(function ({ small: e, ...t }, n) {
        return a.createElement(
          "button",
          C(
            {
              ref: n,
              style: {
                padding: e ? "0.2rem 0.6rem" : "0.25rem 0.75rem",
                borderRadius: 4,
                border: "0 none",
                fontSize: e ? "14px" : "16px",
                cursor: "pointer",
                lineHeight: e ? "1.35" : "1.15",
                color: "white",
              },
            },
            t
          )
        );
      });

      function z() {
        const e = Object.keys(S),
          [t, n] = (0, a.useState)(e[0]),
          o = S[t],
          i = e[e.indexOf(t) + 1];
        return a.createElement(
          "div",
          {
            style: {
              minHeight: 500,
              maxHeight: 500,
              position: "relative",
            },
            className: "jsx-1043839301 docketgo-widget",
          },
          a.createElement(
            r.default,
            {
              id: "1043839301",
            },
            [
              '.docketgo-widget.jsx-1043839301{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-font-smoothing:antialiased;font-family:ui-sans-serif,system-ui,-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial, "Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol","Noto Color Emoji";}',
              ".policy-container.jsx-1043839301{color:rgb(229,231,235);border-radius:0.5rem;padding:1.5rem;padding-right:5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}",
              ".policy-container.jsx-1043839301 h1{color:rgb(229,231,235);}",
              ".policy-selector.jsx-1043839301{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1.25rem;}",
              ".next{background-color:rgb(59,130,246);}",
              ".next:hover{background-color:rgb(96,165,250);}",
              ".ml-3.jsx-1043839301{margin-left:0.75rem;}",
              ".pb-4.jsx-1043839301{padding-bottom:1rem;}",
              ".pb-2.jsx-1043839301{padding-bottom:0.5rem;}",
              ".code.jsx-1043839301{position:relative;overflow:hidden;}",
              ".code.jsx-1043839301 pre{overflow:auto;font-size:1rem;line-height:1.5rem;height:100%;}",
              '.code.jsx-1043839301 code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas, "Liberation Mono","Courier New",monospace;}',
              ".shadow.jsx-1043839301{position:absolute;left:0;right:0;bottom:0;height:60px;background:linear-gradient(#2d2b5500,#2d2b55);}",
              ".policy-selector-wrapper.jsx-1043839301{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",
              ".select.jsx-1043839301{margin-left:0.75rem;}",
              "@media screen and (max-width:640px){.policy-container.jsx-1043839301{padding-right:1.5rem;width:100%;}.policy-selector.jsx-1043839301{-webkit-align-items:end;-webkit-box-align:end;-ms-flex-align:end;align-items:end;}.demo-app-container.jsx-1043839301{display:none;}.policy-selector-wrapper.jsx-1043839301{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.select.jsx-1043839301{margin-left:0;margin-top:0.5rem;}}",
              ".prompt.jsx-1043839301 img.jsx-1043839301{max-width:100%;}",
            ]
          ),
          a.createElement(
            "div",
            {
              style: {
                background: O,
              },
              className: "jsx-1043839301 policy-container",
            },
            a.createElement(
              "div",
              {
                className: "jsx-1043839301 policy-selector",
              },
              a.createElement(
                "div",
                {
                  className: "jsx-1043839301 policy-selector-wrapper",
                },
                a.createElement(M, null, "Value:"),
                a.createElement(
                  "div",
                  {
                    className: "jsx-1043839301 select",
                  },
                  a.createElement(
                    P,
                    {
                      value: t,
                      onChange: (e) => n(e.target.value),
                    },
                    Object.entries(S).map(([e, t]) =>
                      a.createElement(
                        "option",
                        {
                          value: e,
                          key: e,
                          className: "jsx-1043839301",
                        },
                        t.name
                      )
                    )
                  )
                )
              ),
              a.createElement(
                "div",
                {
                  className: "jsx-1043839301 ml-3",
                },
                i
                  ? a.createElement(
                      U,
                      {
                        className: "next",
                        onClick: () => n(i),
                      },
                      "Next"
                    )
                  : a.createElement(
                      "a",
                      {
                        href: I,
                        className: "jsx-1043839301",
                      },
                      a.createElement(
                        U,
                        {
                          className: "next",
                        },
                        "Join us →"
                      )
                    )
              )
            ),
            a.createElement(
              "div",
              {
                className: "jsx-1043839301 code",
              },
              a.createElement(
                s.Z,
                {
                  customStyle: {
                    padding: "0 0 60px",
                    margin: 0,
                    overflow: "auto",
                    backgroundColor: O,
                  },
                  language: "markdown",
                  style: l.Z,
                },
                o.polar
              ),
              a.createElement("div", {
                className: "jsx-1043839301 shadow",
              })
            )
          )
        );
      }
      n.p;
      var B = n(3854),
        F = n(5434),
        L = n(2790),
        T = n(7048);

      function Z(e, t, n, a, o, r, s) {
        const i = 1 - s,
          l = s * s,
          c = i * i,
          m = c * i,
          d = l * s;
        return [
          m * e + 3 * c * s * n + 3 * i * l * o + d * o,
          m * t + 3 * c * s * a + 3 * i * l * r + d * r,
        ];
      }

      function D(e, t, n, a, o, r, s) {
        const [i, l] = (function (e, t, n, a, o, r, s) {
            return [
              2 * (n - e) * (1 - s) + s * (2 * (o - n)),
              2 * (a - t) * (1 - s) + s * (2 * (r - a)),
            ];
          })(e, t, n, a, o, r, s),
          c = Math.sqrt(i * i + l * l);
        return [-l / c, i / c];
      }
      var H = n(7621),
        W = n.n(H);
      const $ = "#24da78",
        q = "#da2424",
        V = "#ff9f1c",
        J = "#bae8e8",
        G = "#ffd803",
        Y = ({ children: e }) => {
          let t = e.split(":")[0],
            n = e.split(":")[1],
            o = null,
            r = {
              fontFamily:
                'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
              fontSize: "0.9em",
              fontWeight: 600,
              padding: "2px 4px",
              borderRadius: "3px",
              background: "#392396",
              display: "inline",
              alignItems: "center",
              whiteSpace: "nowrap",
              border: "1px solid #ffffff44",
            };
          if ("User" === t) {
            const [e, t] = {
              bob: [J, W()(J).spin(20).toHexString()],
              alice: [G, G],
              carol: [V, V],
            }[n] || ["#ffffff", "#ffffff"];
            (r.background = `linear-gradient(90deg, ${e} 0%, ${t} 100%)`),
              (r.color = "#000"),
              (r.border = "1px solid transparent"),
              (n = n[0].toUpperCase() + n.slice(1)),
              (o = a.createElement(B._K$, {
                style: {
                  verticalAlign: "text-top",
                  marginRight: 2,
                },
              }));
          }
          return (
            "Repo" === t &&
              ((n = n[0].toUpperCase() + n.slice(1)),
              (o = a.createElement(F.aHI, {
                style: {
                  verticalAlign: "text-top",
                  marginRight: 2,
                },
              }))),
            "Org" === t &&
              ((n = n[0].toUpperCase() + n.slice(1)),
              (o = a.createElement(F.swz, {
                style: {
                  verticalAlign: "text-top",
                  marginRight: 2,
                },
              }))),
            "Issue" === t &&
              ((o = a.createElement(B.obJ, {
                style: {
                  verticalAlign: "text-top",
                  marginRight: 2,
                },
              })),
              (n = "too heavy!")),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "span",
                {
                  style: r,
                },
                o || a.createElement("span", null, t, t && n && ":"),
                a.createElement("span", null, n)
              )
            )
          );
        },
        K = {
          bobRole: ["has_role", "User:bob", "admin", "Org:acme"],
          aliceRole: ["has_role", "User:alice", "collaborator", "Repo:anvils"],
          anvilsParent: ["has_parent", "Repo:anvils", "Org:acme"],
          roadmapPublic: ["is_public", "Repo:roadmap"],
          issueParent: ["has_parent", "Issue:too_heavy", "Repo:anvils"],
          issueCreator: ["has_creator", "Issue:too_heavy", "User:alice"],
        },
        Q = {
          bobDeleteAnvils: ["User:bob", "can", "delete", "Repo:anvils"],
          carolReadRoadmap: ["User:carol", "can", "read", "Repo:roadmap"],
          aliceDeleteAnvils: ["User:alice", "cannot", "delete", "Repo:anvils"],
          aliceReadIssue: ["User:alice", "can", "read", "Issue:too_heavy"],
          bobCloseIssue: ["User:bob", "can", "close", "Issue:too_heavy"],
          bobReadRoadmap: ["User:bob", "can", "read", "Repo:roadmap"],
          aliceCloseIssue: ["User:alice", "can", "close", "Issue:too_heavy"],
          aliceReadRoadmap: ["User:alice", "can", "read", "Repo:roadmap"],
        },
        X = {
          bobDeleteAnvils: ["bobRole", "anvilsParent"],
          carolReadRoadmap: ["roadmapPublic"],
          aliceDeleteAnvils: ["aliceRole"],
          aliceReadIssue: ["aliceRole", "issueParent"],
          bobCloseIssue: ["bobRole", "issueParent", "anvilsParent"],
          bobReadRoadmap: ["roadmapPublic"],
          aliceCloseIssue: ["issueCreator"],
          aliceReadRoadmap: ["roadmapPublic"],
        },
        ee = {};
      for (const e in K) {
        const t =
          "has_role" === (te = K[e])[0]
            ? "roles"
            : ("has_parent" === te[0] && te[1].startsWith("Repo:")) ||
              "is_public" === te[0]
            ? "repos"
            : "has_parent" === te[0] ||
              "is_locked" === te[0] ||
              "has_creator" === te[0]
            ? "issues"
            : void 0;
        ee[t] || (ee[t] = []), ee[t].push(e);
      }
      var te;
      const ne = ({
        facts: e,
        selectedOutput: t,
        setSelectedOutput: n,
        refs: o,
      }) => {
        const r = X[t] || [];
        return a.createElement(
          "div",
          null,
          e.map((e) =>
            a.createElement(
              "div",
              {
                key: e,
                ref: o[e],
                style: {
                  opacity: r.includes(e) ? 1 : 0.1,
                  transition: "opacity 0.2s",
                  textIndent: "-1em",
                  paddingLeft: "1em",
                  marginTop: 8,
                  lineHeight: "1.5em",
                  textShadow: r.includes(e) ? "0 0 10px #ffffff99" : "none",
                },
              },
              a.createElement(
                "span",
                {
                  style: {
                    cursor: "pointer",
                  },
                  onClick: () =>
                    ((e) => {
                      let a = Object.entries(X).filter(([t, n]) =>
                        n.includes(e)
                      );
                      const o = a.filter(([e]) => e !== t);
                      o.length && (a = o);
                      const r = a[Math.floor(Math.random() * a.length)][0];
                      n(r);
                    })(e),
                },
                a.createElement(me, {
                  fact: K[e],
                })
              )
            )
          )
        );
      };

      function ae() {
        const [e, t] = a.useState(null),
          [n, o] = a.useState(!1),
          r = Object.keys(Q),
          s = r.indexOf(e),
          i = r[(s + 1) % r.length];
        (0, a.useEffect)(() => {
          if (!e) {
            const e = setTimeout(() => t(i), 500);
            return () => clearTimeout(e);
          }
          if (n) {
            const e = setTimeout(() => o(!1), 5e3);
            return () => clearTimeout(e);
          }
          const a = setTimeout(() => {
            t(i);
          }, 5e3);
          return () => clearTimeout(a);
        }, [n, e, t, i]);
        const l = (e) => {
            t(e), o(!0);
          },
          c = ee.roles,
          m = ee.repos,
          d = ee.issues,
          p = Object.keys(K).reduce((e, t) => ((e[t] = a.useRef()), e), {}),
          u = a.useRef(),
          f = a.useRef(),
          b = e ? X[e].map((e) => p[e]) : [];
        return a.createElement(
          "div",
          {
            ref: f,
            style: {
              position: "relative",
            },
          },
          a.createElement(ie, {
            fromRefs: b,
            toRef: u,
            containerRef: f,
          }),
          a.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                fontFamily: "system-ui",
              },
            },
            a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                },
              },
              a.createElement(ne, {
                facts: c,
                selectedOutput: e,
                setSelectedOutput: l,
                refs: p,
              })
            ),
            a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                },
              },
              a.createElement(
                "div",
                {
                  style: {
                    flex: "1",
                    padding: "10px 0",
                    textAlign: "right",
                  },
                },
                a.createElement(ne, {
                  facts: m,
                  selectedOutput: e,
                  setSelectedOutput: l,
                  refs: p,
                })
              ),
              a.createElement("div", {
                style: {
                  width: "7em",
                },
              }),
              a.createElement(
                "div",
                {
                  style: {
                    flex: "1",
                    padding: "10px 0",
                  },
                },
                a.createElement(ne, {
                  facts: d,
                  selectedOutput: e,
                  setSelectedOutput: l,
                  refs: p,
                })
              )
            ),
            a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                },
              },
              a.createElement(
                "span",
                {
                  ref: u,
                  style: {
                    cursor: "pointer",
                  },
                  onClick: () => l(i),
                },
                a.createElement(le, {
                  outputs: Q,
                  selectedOutput: e,
                })
              )
            )
          )
        );
      }

      function oe(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y,
          width: e.width,
          height: e.height,
        };
      }

      function re(e, t) {
        return {
          x: e.x * t,
          y: e.y * t,
          width: e.width * t,
          height: e.height * t,
        };
      }
      const se = ({ fromRef: e, toRef: t, containerRef: n }) => {
          const o = e.current,
            r = t.current,
            s = n.current,
            i = a.useRef(),
            [l, c] = a.useState(null),
            [m, d] = a.useState(null),
            p = (0, a.useCallback)(() => {
              if (!o || !r || !s) return;
              const e = o.getBoundingClientRect(),
                t = r.getBoundingClientRect(),
                n = s.getBoundingClientRect(),
                a = oe(e, n),
                i = oe(t, n),
                l = re(a, 2),
                m = re(i, 2);
              c(l), d(m);
            }, [o, r, s]);
          return (
            (0, a.useEffect)(() => {
              p();
            }, [o, r, s]),
            (0, a.useEffect)(() => {
              if (!i.current || !l || !m) return;
              const e = (function (e, t, n) {
                const a = e.getContext("2d"),
                  o = [(0, T.hA)(), (0, T.hA)(), (0, T.hA)()],
                  r = t.x + t.width / 2,
                  s = n.x + n.width / 2;
                let i = !1;
                const l = s - r;
                let c,
                  m,
                  d = "center";
                l > 10 ? (d = "right") : l < -10 && (d = "left");
                let p = s,
                  u = n.y;
                "center" === d
                  ? ([c, m] = [t.x + t.width / 2, t.y + t.height])
                  : "right" === d
                  ? ([c, m] = [t.x + t.width, t.y + t.height / 2])
                  : "left" === d && ([c, m] = [t.x, t.y + t.height / 2]);
                const f = new Date().getTime();
                let b = () => {
                  if ((a.clearRect(0, 0, e.width, e.height), e.isConnected)) {
                    for (let e = 0; e < 1; e++) t(e);
                    i || requestAnimationFrame(b);
                  }

                  function t(t) {
                    const n = new Date().getTime() - f;
                    (a.strokeStyle = "#fff"),
                      (a.lineWidth = Math.min((n / 500) * 4, 4)),
                      a.beginPath(),
                      (a.shadowBlur = 10),
                      (a.shadowColor = "#eeeeffff");
                    const r = e.width / 2,
                      s = e.height / 2;
                    let i, l, d, b;
                    const g = Math.max(1 - n / 100, 0.05),
                      h = Math.min(n / 200, 0.9);
                    for (let y = g; y < h; y += 0.03) {
                      const [x, w] = Z(c, m, r, s, p, u, y);

                      function k() {
                        const e = n / 500;
                        return 0.6 * o[t](y, e) + 0.4 * o[t](8 * y, 8 * e);
                      }
                      const E = Math.sin((0.9 * y + 0.1) * Math.PI),
                        v = Math.min(6, (n / 1e3) * 6) * E * E,
                        j = k() * v,
                        [R, N] = D(c, m, r, s, p, u, y);
                      (d = x + j * R),
                        (b = w + j * N),
                        void 0 === i && ((i = d), (l = b), a.moveTo(x, w)),
                        a.lineTo(d, b);
                    }
                    a.stroke(),
                      a.stroke(),
                      (a.fillStyle = "#fff"),
                      a.beginPath(),
                      a.arc(i, l, 5, 0, 2 * Math.PI),
                      a.fill(),
                      a.beginPath(),
                      a.arc(d, b, 5, 0, 2 * Math.PI),
                      a.fill();
                  }
                };
                return (
                  requestAnimationFrame(b),
                  () => {
                    i = !0;
                  }
                );
              })(i.current, l, m);
              return e;
            }, [i, l, m]),
            (0, a.useEffect)(() => {
              const e = () => {
                p();
              };
              return (
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }),
            o && r && s
              ? a.createElement("canvas", {
                  ref: i,
                  width: 2 * s.clientWidth,
                  height: 2 * s.clientHeight,
                  style: {
                    position: "absolute",
                    pointerEvents: "none",
                    top: 0,
                    left: 0,
                    width: s.clientWidth,
                    height: s.clientHeight,
                  },
                })
              : null
          );
        },
        ie = ({ fromRefs: e, toRef: t, containerRef: n }) =>
          a.createElement(
            a.Fragment,
            null,
            e.map((e, o) =>
              a.createElement(se, {
                key: o,
                fromRef: e,
                toRef: t,
                containerRef: n,
              })
            )
          ),
        le = ({ outputs: e, selectedOutput: t }) => {
          const n = (0, L.md)([t], 400);
          return a.createElement(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
              },
            },
            n((t, n) => {
              const o = e[t];
              return o
                ? a.createElement(
                    "div",
                    {
                      key: t,
                      style: {
                        position: "absolute",
                        opacity: "enter" === n ? 1 : 0,
                        transform: `translateY(${
                          "from" === n ? 20 : "leave" === n ? -20 : 0
                        }px) scaleY(${"enter" !== n ? 0.4 : 1})`,
                        transition: "opacity 0.4s, transform 0.4s",
                        whiteSpace: "nowrap",
                        textShadow:
                          "enter" === n ? "0 0 10px #ffffff99" : "none",
                      },
                    },
                    a.createElement(ce, {
                      output: o,
                    })
                  )
                : null;
            })
          );
        },
        ce = ({ output: e }) => {
          const t = "can" === e[1],
            n = t
              ? `linear-gradient(90deg, ${W()($).darken(10)} 0%, ${W()(
                  $
                ).darken(5)} 100%)`
              : `linear-gradient(90deg, ${W()(q).lighten(3)} 0%, ${W()(
                  q
                ).lighten(5)} 100%)`;
          return a.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
            },
            a.createElement(
              "span",
              {
                style: {
                  fontSize: "1em",
                  marginBottom: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                },
              },
              a.createElement(
                "span",
                {
                  style: {
                    fontSize: "1.5em",
                    padding: "0.125rem",
                    borderRadius: 4,
                    background: n,
                  },
                },
                t
                  ? a.createElement(B.dZ6, {
                      style: {
                        display: "block",
                      },
                    })
                  : a.createElement(B.apv, {
                      style: {
                        display: "block",
                      },
                    })
              )
            ),
            a.createElement(
              "span",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                },
              },
              a.createElement(
                "span",
                null,
                a.createElement(Y, null, e[0]),
                " ",
                e[1],
                " ",
                a.createElement(Y, null, e[2]),
                " ",
                a.createElement(Y, null, e[3])
              )
            )
          );
        },
        me = ({ fact: e }) => {
          if ("has_role" === e[0]) {
            const t = "admin" === e[2] ? "an" : "a";
            return a.createElement(
              a.Fragment,
              null,
              a.createElement(Y, null, e[1]),
              " is ",
              t,
              " ",
              a.createElement(Y, null, e[2]),
              " on ",
              a.createElement(Y, null, e[3])
            );
          }
          return "has_parent" === e[0]
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(Y, null, e[1]),
                " belongs to ",
                a.createElement(Y, null, e[2])
              )
            : "is_public" === e[0]
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(Y, null, e[1]),
                " is public"
              )
            : "is_locked" === e[0]
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(Y, null, e[1]),
                " is locked"
              )
            : "has_creator" === e[0]
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(Y, null, e[1]),
                " was created by ",
                a.createElement(Y, null, e[2])
              )
            : void 0;
        };
      var de = n(3379),
        pe = n.n(de),
        ue = n(7795),
        fe = n.n(ue),
        be = n(569),
        ge = n.n(be),
        he = n(3565),
        ye = n.n(he),
        xe = n(609),
        we = n.n(xe),
        ke = n(4589),
        Ee = n.n(ke),
        ve = n(2576),
        je = {};

      function Re() {
        window.addEventListener("load", () => {
          const e = document.getElementById("docketgo-marketing-widget");
          e && o.render(a.createElement(ae, null), e);
          const t = document.getElementById("docketgo-web-demo");
          t && o.render(a.createElement(R, null), t);
          const n = document.getElementById("docketgo-values-widget");
          n && o.render(a.createElement(z, null), n);
        });
      }
      (je.styleTagTransform = Ee()),
        (je.setAttributes = ye()),
        (je.insert = ge().bind(null, "head")),
        (je.domAPI = fe()),
        (je.insertStyleElement = we()),
        pe()(ve.Z, je),
        ve.Z && ve.Z.locals && ve.Z.locals,
        (window.process = void 0);
    },
    2576: (e, t, n) => {
      n.d(t, {
        Z: () => i,
      });
      var a = n(8081),
        o = n.n(a),
        r = n(3645),
        s = n.n(r)()(o());
      s.push([
        e.id,
        ".docketgo-web-demo div,\n  .docketgo-web-demo pre,\n  .docketgo-widget div,\n  .docketgo-widget pre {\n    box-sizing: border-box;\n  }\n  .docketgo-web-demo select,\n  .docketgo-web-demo button,\n  .docketgo-widget select,\n  .docketgo-widget button {\n    font-family: inherit;\n    font-size: inherit;\n  }\n  .docketgo-web-demo *, .docketgo-widget * {\n    margin: 0;\n    border: 0;\n    border-style: solid;\n  }\n  .docketgo-web-demo .with-dividers > * + *, .docketgo-widget .with-dividers > * + * {\n    border-top: 1px solid #eee;\n  }\n",
        "",
      ]);
      const i = s;
    },
  },
]);
