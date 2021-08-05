const ProgContest = require("../models/ProgContest.model");

const getPC = (req, res) => {
  res.render("prog-contest/register.ejs", { error: req.flash("error") });
};
const postPC = (req, res) => {

  const {teamName, institutionName, coachName, coachContact, coachEmail, leaderName, leaderContact, leaderEmail, leadertshirt, member1Name, member1Contact, member1Email, member1tshirt, member2Name, member2Contact, member2Email, member2tshirt} = req.body;
  console.log(teamName);
  console.log(institutionName);
  console.log(coachName);
  console.log(coachContact);
  console.log(coachEmail);
  console.log(leaderName);
  console.log(leaderContact);
  console.log(leaderEmail);
  console.log(leadertshirt);
  console.log(member1Name);
  console.log(member1Contact);
  console.log(member1Email);
  console.log(member1tshirt);
  console.log(member2Name);
  console.log(member2Contact);
  console.log(member2Email);
  console.log(member2tshirt);

  let registrationFee = 1000;
  const total = registrationFee;
  const paid = 0;
  const selected = false;
  let error = "";

  ProgContest.findOne({ teamName: teamName, institutionName: institutionName }).then((participant) => {
    if (participant) {
      error = "team with this name and institution already exists!";
      req.flash("error", error);
      res.redirect("/ProgContest/register");
    } else {
      const participant = new ProgContest({
        teamName, institutionName, coachName, coachContact, coachEmail, leaderName, leaderContact, leaderEmail, leadertshirt, member1Name, member1Contact, member1Email, member1tshirt, member2Name, member2Contact, member2Email, member2tshirt, total,paid,selected
      });
      participant
        .save()
        .then(() => {
          error = "Team has been registered successfully!";
          req.flash("error", error);
          res.redirect("/ProgContest/register");
        })
        .catch(() => {
          error = "An unexpected error occured while registering team";
          req.flash("error", error);
          res.redirect("/ProgContest/register");
        });
    }
  });
};

const getPCList = (req, res) => {
  let all_participant = [];
  let error = "";
  ProgContest.find()
    .then((data) => {
      all_participant = data;
      res.render("prog-contest/list.ejs", {
        error: req.flash("error"),
        participants: all_participant,
      });
    })
    .catch(() => {
      error = "Failed to retrieve data!";
      res.render("prog-contest/list.ejs", {
        error: req.flash("error", error),
        participants: all_participant,
      });
    });
};

const deletePC = (req, res) => {
  let error = "";

  ProgContest.deleteOne({ _id: req.params.id })
    .then(() => {
      let error = "Data has been deleted successfully!";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    })
    .catch(() => {
      let error = "Failed to delete data";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    });
};

const paymentDonePC = (req, res) => {
  const id = req.params.id;

  ProgContest.findOne({ _id: id })
    .then((participant) => {
      participant.paid = participant.total;
      participant
        .save()
        .then(() => {
          let error = "Payment completed successfully for Programming Contest!";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        })
        .catch(() => {
          let error = "Data could not be updated!";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated!";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    });
};

const selectPC = (req, res) => {
  const id = req.params.id;

  ProgContest.findOne({ _id: id })
    .then((participant) => {
      participant.selected = true;
      participant
        .save()
        .then(() => {
          let error = "Team has been selected successfully!";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        })
        .catch(() => {
          let error = "Data could not be updated!";
          req.flash("error", error);
          res.redirect("/ProgContest/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated!";
      req.flash("error", error);
      res.redirect("/ProgContest/list");
    });
};

module.exports = {
  getPC,
  postPC,
  getPCList,
  deletePC,
  paymentDonePC,
  selectPC,
};
